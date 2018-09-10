const fs = require('fs');
const _ = require('lodash');
const iconAngularTemplate = require('./component-template.ts');
const svgoConfiguration = require('./svgo-configuration.ts');
const path = 'svgs';
const baseOutputPath = 'src/lib/svg-icons-components';
const iconSelectorPrefix = 'sbb-icon-';

function createSvgIconsComponent(fileName) {

  const svgIcon = fs.readFileSync(fileName, 'utf8');
  const normalizedIconName = normalizeIconNames(fileName.substr(fileName.lastIndexOf('/') + 1));
  const iconSelector = iconSelectorPrefix + normalizedIconName;
  return normalizeSvg(svgIcon).then((optimizedSVG) => {
    const iconComponentName = 'Icon' + _.capitalize(normalizedIconName) + 'Component';
    const svgComponent = iconAngularTemplate.getTemplate(iconSelector, optimizedSVG.data, iconComponentName);
    const iconObject = {
      file: svgComponent,
      fileName: iconSelector + '.component.ts'
    };
    return iconObject;
  });
}

function buildIconsLibrary(baseDir, outputPath) {

  const files = fs.readdirSync(baseDir);
  console.log(baseDir, files);
  files.forEach(file => {
    console.log(file);
    const stats = fs.statSync(baseDir + '/' + file);
    if (stats.isFile()) {
      createSvgIconsComponent(baseDir + '/' + file).then((iconObject) => {
        writeComponentOnFile(outputPath, iconObject);
      });
    } else {
      if (!fs.existsSync(outputPath + '/' + file)) {
        fs.mkdirSync(outputPath + '/' + file);
      }
      buildIconsLibrary(baseDir + '/' + file, outputPath + '/' + file);
    }
  });

}

function normalizeIconNames(svgPathWithUnderscores) {
  return svgPathWithUnderscores
    .substring(svgPathWithUnderscores.lastIndexOf('_') + 1, svgPathWithUnderscores.length - 4)
    .replace(new RegExp('_', 'g'), '-')
    .replace(new RegExp('[0-9]-.*-[0-9]', 'g'), function (a, b, c, d) {
      return '-' + c + '-' + d;
    });
}

function normalizeSvg(svgIconSource) {
  return svgoConfiguration.svgo.optimize(svgIconSource);
}

function writeComponentOnFile(outputPath, iconObject) {
  fs.writeFileSync(outputPath + '/' + iconObject.fileName, iconObject.file);
}

buildIconsLibrary(path, baseOutputPath);

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@angular-devkit/core');
var strings = require('@angular-devkit/core/src/utils/strings');

const registryFileName = 'svg-registry.json';
function initSvgRegistry(options) {
    return (tree) => {
        const svgDir = tree.getDir(options.svgDir);
        const registryPath = core.join(svgDir.path, registryFileName);
        const registryFileContent = tree.read(registryPath);
        const registry = registryFileContent
            ? JSON.parse(registryFileContent.toString('utf8'))
            : {};
        findSvgFiles(svgDir)
            .map(f => core.relative(svgDir.path, f))
            .filter(f => !(f in registry))
            .forEach(file => {
            registry[file] = {
                normalizedName: normalizeName(file, options),
                collections: resolveCollections(file, options)
            };
        });
        const registryAsJson = toSortedJSON(registry);
        if (!registryFileContent) {
            tree.create(registryPath, registryAsJson);
        }
        else if (registryFileContent.toString('utf8') !== registryAsJson) {
            tree.overwrite(registryPath, registryAsJson);
        }
        return tree;
    };
}
function findSvgFiles(directory) {
    const result = [];
    directory.visit(path => result.push(path));
    return result;
}
function normalizeName(file, options) {
    let filename = strings.dasherize(core.basename(file)).replace(/\.svg$/, '');
    if (!options.preserveSbbInName) {
        filename = filename.replace(/(^sbb-|-sbb$)/g, '').replace(/-sbb-/g, '-');
    }
    if (!options.preserveNumberIds) {
        filename = filename.replace(/^\d+-/, '').replace(/-\d+-/g, '-');
    }
    return filename
        .replace(/^-+/, '')
        .replace(/-+/g, '-')
        .replace(/-+$/, '');
}
function resolveCollections(file, options) {
    const collectionParts = core.split(core.dirname(file));
    const collections = options.preserveNumberIds
        ? collectionParts
        : collectionParts.map(c => c.replace(/^\d+[^a-zA-Z0-9]/, ''));
    return collections.map(c => strings.dasherize(c));
}
function toSortedJSON(registry) {
    const sortedRegistry = Object.keys(registry)
        .sort()
        .reduce((current, next) => Object.assign(current, { [next]: registry[next] }), {});
    return JSON.stringify(sortedRegistry, null, 2);
}

exports.initSvgRegistry = initSvgRegistry;

import ts from '@wessberg/rollup-plugin-ts';
import { join } from 'path';

export default [
  'documentation',
  'example-migration',
  'generate-from-svg-registry',
  'generate-icon-modules',
  'init-svg-registry',
  'public2business'
].map(directory => ({
  input: join(__dirname, directory, 'index.ts'),
  output: {
    file: join(__dirname, directory, 'index.js'),
    format: 'cjs'
  },
  external: [
    '@angular/cdk/schematics',
    '@angular-devkit/schematics',
    '@angular-devkit/core',
    '@angular-devkit/core/src/utils/strings',
    '@schematics/angular/utility/config',
    'dgeni',
    'dgeni-packages/typescript/api-doc-types/ApiDoc',
    'dgeni-packages/typescript/api-doc-types/ClassExportDoc',
    'dgeni-packages/typescript/api-doc-types/ExportDoc',
    'dgeni-packages/typescript/api-doc-types/MemberDoc',
    'dgeni-packages/typescript/api-doc-types/MethodMemberDoc',
    'dgeni-packages/typescript/api-doc-types/PropertyMemberDoc',
    'fs',
    'highlight.js',
    'html-minifier',
    'marked',
    'path',
    'rxjs',
    'rxjs/operators',
    'svgo',
    'typescript'
  ],
  plugins: [
    ts({
      browserslist: false,
      tsconfig: join(__dirname, 'tsconfig.json')
    })
  ]
}));

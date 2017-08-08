'use strict';

const gulptraum = require('@process-engine-js/gulptraum');
const tsconfig = require('tsconfig');

const buildSystemConfig = {
  paths: {
    "source": "src/backend/",
    "output": "dist/backend/",
  }
};

const buildSystem = new gulptraum.BuildSystem(buildSystemConfig);

buildSystem.config = buildSystemConfig;

const tsConfigObj = tsconfig.loadSync('.');

const typeScriptConfig = Object.assign({
  compileToModules: ['commonjs']
}, tsConfigObj.config);

const gulp = require('gulp');

buildSystem
  .registerPlugin('typescript', gulptraum.plugins.typescript, typeScriptConfig)
  .registerTasks(gulp);



const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const nconf = require('nconf');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

buildSystem.task('prepare-config-bundle', {
  help: 'prepares the config to include it in a bundle'
}, (callback) => {

  const argv = yargs.argv;
  const env = argv.env || 'development_client';
  const configPath = argv.config_path || path.resolve(process.cwd(), 'config');


  require('nconfetti'); // eslint-disable-line

  nconf.argv()
    .env('__');

  nconf.use('Nconfetti', {path: configPath, env: env});

  // console.log(nconf.stores.Nconfetti.store);
  // nconf.stores.Nconfetti.loadSync();

  const wholeConfig = nconf.get();


  const targetFolder = path.join(__dirname + '/src/frontend/static');

  const configTargetPath = path.join(targetFolder + '/config.json');
  const indexTargetPath = path.join(targetFolder + '/index.js');

  writeFileSync(configTargetPath, JSON.stringify(wholeConfig, null, 2));

  const indexFileContent = `module.exports.config = require('./config.json')`;

  writeFileSync(indexTargetPath, indexFileContent);

  callback();
});

function writeFileSync(path, contents) {
  mkdirp(getDirName(path), function (err) {
    fs.writeFileSync(path, contents);
  });
}
module.exports = function(grunt) {
  'use strict';

  var Helpers = require('./grunt/helpers');
  var _ = require('lodash');
  var path = require('path');
  var configJSON = grunt.file.readJSON('./.boilerplate');

  var taskPaths = {
    tasks: 'grunt/tasks',
    customTasks: 'grunt/custom-tasks'
  };

  var buildPathsDefault = {
    temp: 'tmp',
    source: 'app',
    output: 'dist',
    tests: 'tests',
    assets: 'assets',
    fonts: 'fonts',
    images: 'images',
    scripts: 'scripts',
    styles: 'styles',
    videos: 'videos',
    templates: 'templates'
  };

  var buildPaths = _.extend({}, buildPathsDefault, configJSON.buildPaths);
  buildPaths.bower = grunt.file.readJSON('./.bowerrc').directory;

  if (Helpers.isPackageInstalled('time-grunt')) {
    // this is useful for build optimization
    // run `npm install --save-dev time-grunt` to enable
    require('time-grunt')(grunt);
  }

  grunt.loadNpmTasks('grunt-notify');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), taskPaths.tasks),
    overridePath: path.join(process.cwd(), taskPaths.customTasks),
    data: {
      config: configJSON,
      build: buildPaths
    },
    jitGrunt: true
  });
};

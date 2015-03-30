module.exports = function(grunt, options) {
  return {
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },

    js: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= build.source %>/<%= build.assets %>/<%= build.scripts %>/{,*/}*.js'
      ],
      tasks: ['newer:jshint:all'],
    },

    jsTest: {
      files: ['<%= build.tests %>/spec/{,*/}*.js'],
      tasks: ['newer:jshint:test', 'karma']
    },

    styles: {
      files: ['<%= build.source %>/<%= build.assets %>/<%= build.styles %>/{,*/*}.scss'],
      tasks: ['sass:temp']
    },

    templates: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= build.source %>/<%= build.templates %>/**/*.hbs',
      ],
      tasks: ['assemble:server']
    },

    gruntfile: {
      files: ['Gruntfile.js']
    },

    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= build.temp %>/{,*/*}.html',
        '<%= build.temp %>/<%= build.assets %>/<%= build.styles %>/*.css',
        '<%= build.source %>/<%= build.assets %>/<%= build.images %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        '<%= build.source %>/<%= build.assets %>/<%= build.videos %>/{,*/}*.{mp4,webm}',
        '<%= build.source %>/<%= build.assets %>/<%= build.fonts %>/{,*/}*.{eot,svg,ttf,woff}'
      ]
    }
  };
};

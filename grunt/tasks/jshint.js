module.exports = function(grunt, options) {
  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },

    all: {
      src: [
        'Gruntfile.js',
        '<%= build.source %>/<%= build.assets %>/<%= build.scripts %>/{,*/}*.js'
      ]
    },

    test: {
      options: {
        jshintrc: '<%= build.tests %>/.jshintrc'
      },
      src: ['<%= build.tests %>/spec/{,*/}*.js']
    }
  };
};

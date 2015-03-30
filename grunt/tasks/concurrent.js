module.exports = function(grunt, options) {
  return {
    options: {
      logConcurrentOutput: true
    },

    server: [
      'sass:temp'
    ],

    test: [
      'copy:styles'
    ],

    dist: [
      'sass:dist',
      'imagemin:dist',
      'svgmin:dist'
    ]
  };
};

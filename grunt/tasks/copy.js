module.exports = function(grunt, options) {
  return {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= build.source %>',
        dest: '<%= build.output %>',
        src: [
          '*.html',
          '*.{ico,png,txt,xml}',
          '.htaccess',
          'public/',
          '<%= build.assets %>/<%= build.images %>/{,*/}*.{webp}',
          '<%= build.assets %>/<%= build.videos %>{,*/}*.{mp4,webm}',
          '<%= build.assets %>/<%= build.fonts %>{,*/}*.{eot,svg,ttf,woff}'
        ]
      }]
    }
  };
};

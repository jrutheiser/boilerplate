module.exports = function(grunt, options) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= build.source %>/<%= build.assets %>/<%= build.images %>',
        src: '{,*/}*.svg',
        dest: '<%= build.output %>/<%= build.assets %>/<%= build.images %>'
      }]
    }
  };
};

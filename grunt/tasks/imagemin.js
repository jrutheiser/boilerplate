module.exports = function(grunt, options) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= build.source %>/<%= build.assets %>/<%= build.images %>',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%= build.output %>/<%= build.assets %>/<%= build.images %>'
      }]
    }
  };
};

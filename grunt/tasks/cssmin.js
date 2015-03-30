module.exports = function(grunt, options) {
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= build.output %>/<%= build.assets %>/<%= build.styles %>',
        src: ['{,*/}*.css'],
        dest: '<%= build.output %>/<%= build.assets %>/<%= build.styles %>',
      }]
    }
  };
};

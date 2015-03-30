module.exports = function(grunt, options) {
  return {
    options: {
      includePaths: [
        '<%= build.bower %>/bourbon/app/assets/stylesheets'
      ],
      sourceMap: false
    },

    dist: {
      files: [{
        expand: true,
        cwd: '<%= build.source %>/<%= build.assets %>/<%= build.styles %>',
        src: ['*.scss'],
        dest: '<%= build.output %>/<%= build.assets %>/<%= build.styles %>',
        ext: '.css'
      }]
    },

    temp: {
      files: [{
        expand: true,
        cwd: '<%= build.source %>/<%= build.assets %>/<%= build.styles %>',
        src: ['*.scss', '!_*.scss'],
        dest: '<%= build.temp %>/<%= build.assets %>/<%= build.styles %>',
        ext: '.css'
      }]
    }
  };
};

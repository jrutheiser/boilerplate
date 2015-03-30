module.exports = function(grunt, options) {
  return {
    dist: {
      files: [{
        dot: true,
        src: [
          '<%= build.temp %>',
          '<%= build.output %>/{,*/}*',
          '!<%= build.output %>/.git*'
        ]
      }]
    },
    server: '<%= build.temp %>'
  };
};

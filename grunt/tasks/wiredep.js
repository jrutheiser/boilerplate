module.exports = function(grunt, options) {
  return {
    app: {
      src: ['<%= build.output %>/{,*/}*.html'],
      ignorePath:  /(\.\.\/)/,
      overrides : {}
    }
  };
};

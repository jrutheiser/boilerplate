module.exports = function(grunt, options) {
  return {
    options: {
      marked: {
        sanitize: false
      },
      assets: '<%= build.output %>/<%= build.assets %>',
      layoutdir: '<%= build.source %>/<%= build.templates %>/layouts',
      partials: ['<%= build.source %>/<%= build.templates %>/partials/{,*/}*.hbs']
    },

    dist: {
      options: {
        layout: 'default.hbs'
      },
      files: [{
        expand: true,
        cwd: '<%= build.source %>/<%= build.templates %>',
        src: [
          '{,*/}*.hbs',
          '!layouts/*.hbs',
          '!partials/*.hbs'
        ],
        dest: '<%= build.output %>/'
      }]
    },

    server: {
      options: {
        layout: 'default.hbs'
      },
      files: [{
        expand: true,
        cwd: '<%= build.source %>/<%= build.templates %>',
        src: [
          '{,*/}*.hbs',
          '!layouts/*.hbs',
          '!partials/*.hbs'
        ],
        dest: '<%= build.temp %>/'
      }]
    }
  };
};

module.exports = function(grunt, options) {
  var config = options.config;
  var build = options.build;

  return {
    options: {
      port: config.server.port,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: config.server.host,
      livereload: config.server.liveReload
    },
    livereload: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            connect.static(build.temp),
            connect().use(
              '/' + build.bower,
              connect.static('./' + build.bower)
            ),
            connect.static(build.source)
          ];
        }
      }
    },
    test: {
      options: {
        port: 9001,
        middleware: function (connect) {
          return [
            connect.static(build.temp),
            connect.static(build.tests),
            connect().use(
              '/' + build.bower,
              connect.static('./' + build.bower)
            ),
            connect.static(build.source)
          ];
        }
      }
    },
    dist: {
      options: {
        open: true,
        base: '<%= config.paths.dist %>'
      }
    }
  };
};

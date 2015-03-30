var _ = require('lodash');
var pkgJSON = require('../package.json');

var Helpers = {
  // check if package is listed in devDependencies
  isPackageInstalled: function(pkgName) {
    if (_.isEmpty(pkgName) ||
        _.isEmpty(pkgJSON.devDependencies)) {
      return false
    }

    return _.has(pkgJSON.devDependencies, pkgName);
  }
};

module.exports = Helpers;

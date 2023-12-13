const path = require("path")
module.exports = [{
    entry: './LoaderLogo/index.js',
    output: {
      filename: 'ComponentLoaderLogo.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/LoaderLogo'
    }
  }];
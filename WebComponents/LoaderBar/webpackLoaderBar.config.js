const path = require("path")
module.exports = [{
    entry: './LoaderBar/index.js',
    output: {
      filename: 'ComponentLoaderBar.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/LoaderBar'
    }
  }];
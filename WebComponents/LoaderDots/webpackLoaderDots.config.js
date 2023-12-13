const path = require("path")
module.exports = [{
    entry: './LoaderDots/index.js',
    output: {
      filename: 'ComponentLoaderDots.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/LoaderDots'
    }
  }];
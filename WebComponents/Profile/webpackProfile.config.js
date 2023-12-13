const path = require("path")
module.exports = [{
    entry: './Profile/index.js',
    output: {
      filename: 'ComponentProfile.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Profile'
    }
  }];
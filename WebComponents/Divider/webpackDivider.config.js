const path = require("path")
module.exports = [{
    entry: './Divider/index.js',
    output: {
      filename: 'ComponentDivider.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Divider'
    }
  }];
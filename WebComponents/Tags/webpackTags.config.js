const path = require("path")
module.exports = [{
    entry: './Tags/index.js',
    output: {
      filename: 'ComponentTags.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Tags'
    }
  }];
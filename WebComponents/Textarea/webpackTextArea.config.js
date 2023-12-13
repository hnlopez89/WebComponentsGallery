const path = require("path")
module.exports = [{
    entry: './TextArea/index.js',
    output: {
      filename: 'ComponentTextArea.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/TextArea'
    }
  }];
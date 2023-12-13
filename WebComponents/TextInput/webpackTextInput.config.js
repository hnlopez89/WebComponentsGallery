const path = require("path")
module.exports = [{
    entry: './TextInput/index.js',
    output: {
      filename: 'ComponentTextInput.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/TextInput'
    }
  }];
const path = require("path")
module.exports = [{
    entry: './RadioButton/index.js',
    output: {
      filename: 'ComponentRadioButton.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/RadioButton'
    }
  }];
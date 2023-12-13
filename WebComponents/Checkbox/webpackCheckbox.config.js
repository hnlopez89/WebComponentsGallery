const path = require("path")
module.exports = [{
    entry: './Checkbox/index.js',
    output: {
      filename: 'ComponentCheckbox.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Checkbox'
    }
  }];
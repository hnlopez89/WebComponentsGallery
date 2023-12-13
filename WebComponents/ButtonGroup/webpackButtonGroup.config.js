const path = require("path")
module.exports = [{
    entry: './ButtonGroup/index.js',
    output: {
      filename: 'ComponentButtonGroup.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/ButtonGroup'
    }
  }];
const path = require("path")
module.exports = [{
    entry: './ToggleButton/index.js',
    output: {
      filename: 'ComponentToggleButton.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/ToggleButton'
    }
  }];
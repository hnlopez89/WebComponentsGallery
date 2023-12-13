const path = require("path")
module.exports = [{
    entry: './ToggleSwitch/index.js',
    output: {
      filename: 'ComponentToggleSwitch.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/ToggleSwitch'
    }
  }];
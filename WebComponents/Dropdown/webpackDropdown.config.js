const path = require("path")
module.exports = [{
    entry: './Dropdown/index.js',
    output: {
      filename: 'ComponentDropdown.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Dropdown'
    }
  }];
const path = require("path")
module.exports = {
    entry: './Button/index.js',
    output: {
      filename: 'ComponentButton.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Button'
    }
  };
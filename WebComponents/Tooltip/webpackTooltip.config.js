const path = require("path")
module.exports = [{
    entry: './Tooltip/index.js',
    output: {
      filename: 'ComponentTooltip.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Tooltip'
    }
  }];
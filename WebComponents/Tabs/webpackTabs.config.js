const path = require("path")
module.exports = {
    entry: './Tabs/index.js',
    output: {
      filename: 'ComponentTabs.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Tabs'
    }
  };
const path = require("path")
module.exports = [{
    entry: './Breadcrumb/index.js',
    output: {
      filename: 'ComponentBreadcrumb.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Breadcrumb'
    }
  }];
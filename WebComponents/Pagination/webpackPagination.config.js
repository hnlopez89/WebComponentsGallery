const path = require("path")
module.exports = [{
    entry: './Pagination/index.js',
    output: {
      filename: 'ComponentPagination.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Pagination'
    }
  }];
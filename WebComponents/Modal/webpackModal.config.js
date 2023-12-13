const path = require("path")
module.exports = [{
    entry: './Modal/index.js',
    output: {
      filename: 'ComponentModal.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Modal'
    }
  }];
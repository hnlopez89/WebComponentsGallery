const path = require("path")
module.exports = [{
    entry: './Notification/index.js',
    output: {
      filename: 'ComponentNotification.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Notification'
    }
  }];
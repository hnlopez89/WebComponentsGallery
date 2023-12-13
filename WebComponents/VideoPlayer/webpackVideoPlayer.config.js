const path = require("path")
module.exports = [{
    entry: './VideoPlayer/index.js',
    output: {
      filename: 'ComponentVideoPlayer.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/VideoPlayer'
    }
  }];
const path = require("path")
module.exports = {
    entry: './Slider/index.js',
    output: {
      filename: 'ComponentSlider.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Slider'
    }
  };
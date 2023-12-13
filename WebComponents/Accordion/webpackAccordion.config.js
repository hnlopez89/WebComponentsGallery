const path = require("path")
module.exports = [{
    entry: './Accordion/index.js',
    output: {
      filename: 'ComponentAccordion.js',
      path: path.resolve(__dirname, '../..') + '/WebComponentsBundle/Accordion'
    }
  }];
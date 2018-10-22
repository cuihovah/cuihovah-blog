var showdown  = require('showdown');
var _ = require('underscore');
var fs = require('fs');
var converter = new showdown.Converter();
var templateHtml = fs.readFileSync(process.argv[2], 'utf-8')
var content = fs.readFileSync(process.argv[3], 'utf-8')
var template = _.template(templateHtml);
var html = template({body: converter.makeHtml(content)})

console.log(html)

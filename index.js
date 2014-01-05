'use strict';
var map = require('map-stream');
var es = require('event-stream');;
var gutil = require('gulp-util');
var pruneHTML = require('prune-html');

module.exports = function(opt) {
  return es.map(function (file, cb) {
    if(!opt) throw new Error('Selectors missing');
    file.contents = new Buffer(pruneHTML(opt,file.contents.toString()));
    cb(null,file);
  });
};

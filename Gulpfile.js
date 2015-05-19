'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require("gulp-rename");
var gutil = require('gulp-util');

gulp.task('build', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './lib/virtualize.js',
    standalone: 'virtualize-html'
  });

  return b.bundle()
    .pipe(source('./lib/virtualize.js'))
    .pipe(buffer())
    .on('error', gutil.log)
    .pipe(rename('virtualize.js'))
    .pipe(gulp.dest('./dist/'));
});

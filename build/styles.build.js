'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  console.log(1)
  return src('../packages/styles/index.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('../lib/styles'));
}

exports.build = series(compile);
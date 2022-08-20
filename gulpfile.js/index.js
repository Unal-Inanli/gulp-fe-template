const { series, watch, parallel } = require('gulp');
const compileSass = require('./sass-compile.js');
const createStructure = require('./createStructure.js');
const compileJs = require('./js-compile');
const compileHtml = require('./html-compile');
const clean = require('./clean');
const browserSync = require('./browser');
const bs = require('browser-sync');

function watchers(cb) {
  watch(['./src/scss/**/*.scss'], compileSass).on("change", bs.reload);
  watch(['./src/js/**/*.js'], compileJs).on("change", bs.reload);
  watch(['./src/index.html'], compileHtml).on("change", bs.reload);
}


exports.watch = parallel(browserSync, watchers)
exports.clean = clean;
exports.sass = compileSass;
exports.scaffold = createStructure;
exports.js = compileJs;


exports.default = series(createStructure, compileSass, compileJs, compileHtml, parallel(watchers, browserSync));
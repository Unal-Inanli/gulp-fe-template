const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const bs = require('browser-sync');
function compileJs(cb) {
  return browserify({
    entries: "./src/js/index.js",
  })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(source('main.js'))
    // To load existing source maps
    // This will cause sourceMaps to use the previous sourcemap to create an ultimate sourcemap
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("./public/js"))
    
}



module.exports = compileJs;
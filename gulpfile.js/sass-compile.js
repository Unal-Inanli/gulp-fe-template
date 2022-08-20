const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const GulpPostCss = require('gulp-postcss');
const cssnano = require('cssnano');
const bs = require('browser-sync');

function compileSass(cb) {

    const plugins = [
        autoprefixer,
        cssnano
    ]
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(GulpPostCss(plugins))
        .pipe(gulp.dest('./public/css', {}))
}


module.exports = compileSass;
const gulp = require('gulp');
const inject = require('gulp-inject');
const fs = require('fs');
const bs = require('browser-sync');


function compileHtml(cb) {

        fs.copyFileSync("./src/index.html", "./public/index.html");
        
        return gulp.src("./public/index.html")
        .pipe(inject(gulp.src(["./public/js/main.js", "./public/css/main.css"], {read: false}), {relative: true}))
        .pipe(gulp.dest('./public'))
}


module.exports = compileHtml
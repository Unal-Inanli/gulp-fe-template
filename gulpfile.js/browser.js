const gulp = require('gulp');
const bs = require('browser-sync');
const fs = require('fs');


function browserSync() {
    if(!fs.existsSync('./public')) {
        throw new Error("Public directory not found");
    }

    bs.init({
        server: {
            baseDir: "./public"
        },
    });
}

module.exports = browserSync;
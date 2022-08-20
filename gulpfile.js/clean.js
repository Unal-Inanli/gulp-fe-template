const fs = require('fs');


function clean(cb) {
    if(fs.existsSync('./public')) {
        fs.rmSync("./public", { recursive: true, force: true });        
    }
    cb();
}


module.exports = clean;
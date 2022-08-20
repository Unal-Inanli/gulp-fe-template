const fs = require('fs');


function createStructure(cb) {
    console.log("creating structure");
    const targetDir = __dirname + "/../public/"
    const folders = [
        'css',
        'img',
        'fonts',
        'js'
    ];

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
    }

    folders.forEach(folder => {
        if(!fs.existsSync(targetDir + folder)) {
            fs.mkdirSync(targetDir + folder);
            console.log('📁  folder created:', folder);    
        }   
    });

    console.log("All folders created");
    cb();
}

module.exports = createStructure;
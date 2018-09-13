var fs = require('fs');
var path = './';

function getFiles(path) {
  fs.readdir (path, function(err, files) {
    console.log(files);
    for (var i in files){
      if(fs.statSync(files[i]).isDirectory()){
        var name = files[i];
        fs.readdir(name, function(err, files) {
          console.log(files);
        });
      }
    }
  });
}

getFiles(path);

//module.exports = getFiles;

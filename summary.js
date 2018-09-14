var fs = require('fs');
var path = './';
var config = require('./config.json');
//const copyFile = require('fs-copy-file');

function getFiles(path) {
  fs.readdir (path, function(err, files) {
    console.log(files);
    for (var i in files){
      if(fs.statSync(files[i]).isDirectory()){
        //Имя папки
        var name = files[i];
        //Получение папки с таким же именем
        var newFolder = files[i] + '/' + files[i];
        //чтобы не создавать папки в .git
        if(name != '.git'){
          fs.mkdir(newFolder, function functionName() {
            //console.log(newFolder);
            fs.readdir(name, function(err, files) {

              for(var f in files){
                //console.log(name + '/' + files[f]);
                //console.log(fs.statSync(name + '/' + files[f]));
                if(fs.statSync(name + '/' + files[f]).isFile()){
                  //если файл txt
                  if(files[f].indexOf('.txt') == 1){

                  //console.log('file: ' + files[f]);
                  fs.copyFile(name + '/' + files[f], newFolder + '/' + files[f], err => {

                    fs.readFile('./config.json', 'utf8', function(err, data) {
                      var inf = JSON.parse(data);
                      fs.readdir(newFolder, function (err, files) {
                        for(var f in files){
                          if(fs.statSync(newFolder + '/' + files[f]).isFile()){
                            fs.writeFile(newFolder + '/' + files[f], inf.copyright, function (err) {

                            });
                          }
                        }
                      })
                      //console.log(newFolder + '/' + files[f]);
                    });


                  });
                }
              }
            }
          });
        });

      }

        //fs.readdir(name, function(err, files) {
        //  console.log(files);
        //});

      }
    }
  });
}

getFiles(path);

module.exports = getFiles;

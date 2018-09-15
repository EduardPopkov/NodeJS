var fs = require('fs');
var path = './';
var config = require('./config.json');

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
          fs.mkdir(newFolder, function () {
            fs.readdir(name, function(err, files) {
              //Прохожу по всем файлам каталога
              for(var f in files){
                if(fs.statSync(name + '/' + files[f]).isFile()){
                  //если файл txt, то копирую
                  if(files[f].indexOf('.txt') == 1){
                  fs.copyFile(name + '/' + files[f], newFolder + '/' + files[f], err => {
                    //читаю данны с json файла
                    fs.readFile('./config.json', 'utf8', function(err, data) {
                      var inf = JSON.parse(data);
                      fs.readdir(newFolder, function (err, files) {
                        for(var f in files){
                          if(fs.statSync(newFolder + '/' + files[f]).isFile()){
                            //записываю данные из json в файлы каталога
                            fs.writeFile(newFolder + '/' + files[f], inf.copyright, function (err) {

                            });
                          }
                        }
                      });
                    });
                  });
                }
              }
            }
          });
        });
      }
      fs.readdir(name, function(err, files) {
          console.log(files);
      });
    }
  }
});

fs.watch('./', (changeType, fileName) => {
  console.log('change', changeType, fileName);
});

}


getFiles(path);

module.exports = getFiles;

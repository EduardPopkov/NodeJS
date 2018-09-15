var fs = require('fs');
require('./summary');

//1
console.log('Hello world');

//2
const name = process.argv[2];
console.log(`Hi ${name}`);

//3
var arrayArgv = process.argv;

var printRandomArgv =  function(arrayArgv) {
  var rand = Math.floor(Math.random() * arrayArgv.length);
  console.log('rand - ' + rand);
  for (var i = 0; i < rand; i++) {
    console.log(arrayArgv[i]);
  }
}

printRandomArgv(arrayArgv);


//console.log(dir);

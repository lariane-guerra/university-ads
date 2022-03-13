var variavel = require('fs');
var caminho = require('path');

var pasta = process.argv[2];
var a = '.' + process.argv[3];

variavel.readdir(pasta, function (err, arquivos){
    if (err) return console.error(err)
    arquivos.forEach(function(arquivo) {
        if (caminho.extname(arquivo) === a) {
            console.log(arquivo);
        }
    })
})
var variavel = require('fs');

var conteudo = variavel.readFileSync(process.argv[2]);
var linhas = conteudo.toString().split('\n').length - 1;

console.log(linhas);
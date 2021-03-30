

//Forma 1
var alunos = new Array('manoel', 'ricardo', 'lucas');
console.log(alunos);

//Forma 2
var notas = [1, 3, 5, 7, 9];
console.log(notas);

//criando array vazio

var dados = [];

// fazendo acesso ao valor de indice 
//console.log(notas[2]);

//alterando o valor a partir do indice
notas[2] = 12;
//console.log(notas);

//atencao ao acessar um valor de um indice que nao existe

notas[9] = 10; // nao existe
console.log(notas);

var nomes = ['Paula', 'Maria', 'Julia'];
nomes.push('Vanessa'); //insere o valor no final do array

console.log(nomes);

//tamanho do array
console.log(nomes.length);


var alunos = ['vera', 'lucia', 'pedro'];
alunos.sort(); //ordenando array de strings
//console.log(alunos);

var precos = [123.55, 42.27];
console.log(precos);
precos.sort();
console.log(precos);

var idades = [5, 1, 8, 12, 44, 78];
idades.sort(function(a, b){
	return a - b;
})

console.log(idades);

//deletando dados de um array

delete idades[3];
console.log(idades);

idades[3] = 12;
console.log(idades);

idades.splice(3, 1); //apartir do indice 3 delete 1 registro.

console.log(idades);

//removendo elementos da ultima posicao do array

idades.pop(); //remove e retorna o ultimo elemento de um array
console.log(idades);

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = impares.concat(pares); //concatena os 2 arrays
console.log(rest);

rest.sort(function(a, b) {
	return a - b;
});

console.log(rest);













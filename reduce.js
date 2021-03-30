

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;

for(var i = 0; i < precos.length; i++) {
	soma = soma + precos[i];
}

console.log(soma);

soma = 0;

precos.forEach(function(valor) {
	return soma + valor;
});

console.log(soma);


function somar(anterior, atual) {
	return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);

//exemplo map/reduce

function adicionar_taxa(valor){
	return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
console.log(ret);

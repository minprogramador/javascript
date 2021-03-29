

//Operadores logicos.
var curso = 'Javascript';
var legal = true;

//AND (e = ambas expressoes devem ser verdadeiras)
if(curso === 'Javascript' && legal === true) {
	console.log('O curso de Javascript é legal');
}else{
	console.log('O curso nao é de Javascript ou nao é legal.');
}


//OR (ou = pelo menos uma expressao deve ser verdadeira)

if(curso === 'Javascript' || legal === true) {
	console.log('O curso de Javascript é legal');
}else{
	console.log('O curso nao é de Javascript ou nao é legal.');
}

//NOT (quando queremos fazer uma negacao ou verificar se algo é como esperado).
if(curso != 'Javascript'){
	console.log('o curso nao é de Javascript');
}else{
	console.log('o curso é de Javascript');
}
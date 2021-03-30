

try{
	console.log(nome);
}catch(e){
	console.log('nao foi possivel imprimir nome');
}

console.log('oi ....');

function dividir(num1, num2){
	if(num1 === 0 || num2 === 0){
		throw("Os valores devem ser positivos");
	}else{
		return num1 / num2;
	}
}

let ret = dividir(8, 2);
console.log(ret);



var idade = 17;

if(idade >= 18){
	console.log("Maior de idade");
}else{
	console.log("Menor de idade");
}

if(idade <= 14){
	console.log('crianca');
}else if(idade > 14 && idade < 18){
	console.log("adolescente");
}else{
	console.log("Adulto");
}

valor = 1;

if(valor === "1"){
	console.log("Sim 1 === 1");
}else{
	console.log("Nao");
}

var sexo = 'm';

switch(sexo){
	case 'm':
		console.log("Masculino");
		break;
	case 'f':
		console.log('Feminino');
		break;
	default:
		console.log('Desconhecido');
		break;
}








//criando uma funcao cnstrutora

function Pessoa(n, s) {
	//atributo privado so conseguimos fazer uso dentro da funcao construtora
	let altura = 0.30;
	let peso = 0.5;
	let idade = 0;
	let nome = s;
	let sexo = s;

	//atributo publico pode ser acessado fora da funcao construtora
	this.raca = 'humano';

	let imprimir_dados = function(){
		console.log(`Nome: ${nome}, Idade ${idade}`)
	}

	this.fazer_aniversario = function() {
		idade += 1;
		imprimir_dados();
	}

	this.getIdade = function(){
		return idade;
	}
}

const angelina = new Pessoa("Angelina", "Feminino");
console.log(angelina);

console.log(angelina.raca);
console.log(angelina.fazer_aniversario());
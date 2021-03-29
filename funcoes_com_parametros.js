

function calcular_idade(ano_nascimento) {
	const data = new Date(); //gera a data atual

	const idade = data.getFullYear() - ano_nascimento;

	return idade;
}

console.log(calcular_idade(1998));
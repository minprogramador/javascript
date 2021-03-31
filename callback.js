

const cursos = [
	'Programacao para leigos',
	'Algoritimos e logica de programacao',
	'Programacao em c',
	'Progrmacao em python'
];

function apresentar(curso, indice) {
	console.log(`${indice + 1} - ${curso}`)
}

cursos.forEach(apresentar); // aqui esta ocorrendo o callback

//usando lambda
cursos.forEach(function(curso, indice) {
	console.log(`${indice +1} - ${curso}`);
});

//usando arrow
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));
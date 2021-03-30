

var cursos = [
	'programacao para leigos',
	'algoritmos e logica de programacao',
	'programacao em c',
	'programacao em java'
];

function imprimir(curso, indice) {
	console.log(indice + ' - ' + curso);
}

//cursos.forEach(imprimir);

cursos.forEach(function(curso, indice) {
	console.log(`${indice}  - ${curso}`);
});

for(var i = 0; i < cursos.length; i++) {
	console.log(i + ' - ' + cursos[i]);
}
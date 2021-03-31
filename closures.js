

let variavel = 'global';

function externa() {
//	let variavel = 'local';

	function interna() {
		return variavel;
	}

	return interna();
}

console.log(externa());


//Operadores relacionais

// Os operadores mais comuns são:

/*

Igual a 		 ===
Diferente de 	 !=
Maior que 		 >
Menos que 		 <
Maior ou igual a >=
Menor ou iugla a <=

Igual e do mesmo tipo que ===
Diferente e de outro tipo que !==

*/

var n1 = 54, n2 = 78;

console.log(n1 == n2); // false
console.log(n1 != n2); // true
console.log(n1 > n2); // false
console.log(n1 < n2); // true
console.log(n1 >= n2); // false
console.log(n1 <= n2); // true
console.log(n1 === n2); // false
console.log(n1 !== n2); // ??

if(n1 > n2) {
	console.log('N1 é maior que N2');
}else{
	console.log('N1 é menor que N2');
}
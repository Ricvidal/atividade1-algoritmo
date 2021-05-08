/*Defina em um programa Javascript as funções equação1 e equação2 conforme descritas
abaixo. Posteriormente, crie e imprima uma expressão que faça a soma dos valores
retornados pelas funções para os valores de entrada p = 4, q = 2, r = 10 e s = 3.*/

function principal() {
		var p=document.getElementById("p").value;
		var q=document.getElementById("q").value;
		var r=document.getElementById("r").value;
		var s=document.getElementById("s").value;
		var res=0;
		res=equação1(p,q)+equação2(r,s);
		document.getElementById("res").value=res;
		console.log('Resultado da equação1 ==>  '+equação1(p,q));
		console.log('Resultado da equação2 ==>  '+equação2(r,s));
		console.log('Equação1 + Equação2 ==>  '+res);

}
function equação1(p, q) {
r1 = Number(p) + Number(q);
r2 = Number(p) - Number(q);
return r1 * r2;
}

function equação2(r, s) {
return Number(r)*2 - Number(s)*3;
}
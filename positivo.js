/*Crie uma função que receba um número inteiro e devolva verdadeiro se o número for maior
que zero e falso se o número for menor ou igual que zero. OBS.: Teste sua função fazendo
uma chamada a ela.*/

function principal(){
	console.log(numer());
}
function numer(n) {
		var n=document.getElementById("num").value;
		var teste=parseInt(n);
		if (teste>0){
		 
		 return true;
	}
	return false;
	 
}

var texto=prompt('Digite o texto:').split('');
var vogais=['A','E','I','O','U','a','e','i','o','u','Ã','Á','À','É','Ê','Ó','Ú','Í','Ô','à','á','ã','é','ê','í','ô','ó','ú'];
var tam=texto.length;
var qtd=0;
console.log(vogais);
console.log(texto);
console.log(tam);
for (var i=0; i<tam; i++) {
	for (var j=0; j<vogais.length; j++) {
	if(texto[i]===vogais[j]){
		qtd+=1;
	}
}
}document.write('Esse texto tem: ' +qtd+ ' vogal(is).');

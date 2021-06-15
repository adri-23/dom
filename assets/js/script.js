/*document.getElementsByClassName('parrafo')[0].innerHTML ='hola soy un texto diferente';
/*accedemos a DOCUMENTOS-buscamos elemntos con la clase -(nombre de la clase) */

/*var parrafos = documents.getElementsByClassName('parrafo');
/*variable parrafos, por el documento.buscamos las clases parrafo
console.log(parrafos);*/

/*document.getElementsByClassName('parrafo')[0].innerHTML ='parrafo cambiado directamente'; */
document.querySelectorAll('.parrafo')[0].textContent = 'nuevo  texto de parrafo';
document.querySelector('#parrafo2').textContent = 'nuevo  texto de parrafo';

var parrafo1 = document.querySelectorAll('.parrafo')[0];
var parrafo2 = document.querySelector('#parrafo2');
/*querySeletor: solo afecta a un parrafo

documents.querySellectorALL('.parrafo')[1].textContent ='nuevo texto de parrafo';
querySelectorAll: hara una busquda de todo lo que contenga esa clase */

/*si ponemos el punto :es una clase
si ponemos #: hacemos referencia a un aidi*/

/*get element son lo devuelve en arreglos 
document.getElementById(parrafo2).innerHTML ='soy el parrafo 2'; */

/*imprimimos en consola  */
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);


//hacemos una variable llamada como el id del h3 de html//
//con el querySelector para hacer referencia al id, html y clases del subtitulo//
let subtitle = document.querySelector('#subtitle') //el # lo ponemos de referencia con el id del html q pusimos en el <h3>//
console.log(subtitle);//si lo imprimimos nos imprime la eqtieta h3 por q tiene ese id//

//si ese elemento quiero agregarle un texto//
subtitle.textContent ='subtitulo';
/*subtitle: es la variable id que tenemos en el html 
text.Content: agregar nuevo valor contexto. 
subtitulo: es el nuevo texto q le estamos asignando */

// classList.add('mi-clase') Lo utilizamos para agregar clases al elemento
subtitle.classList.add('red');

subtitle.classList.remove('red');

//creamos un arreglo animales
const animales = ['perro','gato','mapache','pez','leopardo','raton','zorro'];
//para pasarlo al html hacemos referencia a la lista
const list = document.querySelector('#list'); //enlasamos 

/*forEach: nos permiterecorrer arreglos listas u otros elementos los cuales se pueden recorer por posiciones */
animales.forEach(function(animal) { //utilizamos una fuction anomima: no tiene nombre
    let item =document.createElement('li'); //crea una lista
    item.textContent=animal;
    list.appendChild(item);// appendChild: agrega un hijo
});

//otra manera de hacer una funcion 
animales.forEach((animal,index)=> { 
    let item =document.createElement('li'); 
    item.textContent=`${animal} ${index}`
    list.appendChild(item);
});


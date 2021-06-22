nameInput =document.querySelector('#nameInput');
//agregar un elemento
nameInput.addEventListener('keyup', function(event) {
    console.log(nameInput.value);// extraer los valores
});
/*hago referencia a lavariable.
add.EventLisener: agregar un evento q tiene que escuchar.
keyup:evento que va escuchar.
 function:funion anonima.
 event:hace referencia al elemento que recibe el evento*/


let button=document.querySelector('#button');
button.addEventListener('click',event => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
})



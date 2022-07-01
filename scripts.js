// Como seleccionar elementos del HTML

// 1-  querySelector
// 2-  querySelectorAll
// 3-  getElementById

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//querySelector

const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 elemento
//console.log(heading);
//heading.textContent = 'JAJAJAJAJAJA' (textContent sirve para modificar un texto desde JavaScript)


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//querySelectorAll

const enlaces = document.querySelectorAll('.navegación a');
//console.log(enlaces);
//enlaces[0].href = 'http://youtube.com'         (PARA CAMBIAR DIRECCIONES DE ENLACES)
//enlaces[0].classList.add('nueva clase');       (PARA AGREGAR NUEVAS CLASES)
//enlaces[0].classList.remove('clase');            (PARA ELIMINAR CLASES)


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//getElementById

const heading2 = document.getElementById('heading');
//console.log(heading2);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//Generar nuevo enlace
 
// const nuevoEnlace = document.createElement('A');

// nuevoEnlace.href = 'http://youtube.com';                            //link del enlace
// nuevoEnlace.textContent = 'mandale al yutu mi negro';               //texto del enlace
// nuevoEnlace.classList.add('navegación__enlace');                    //clase del enlace (opcional)

// const navegación = document.querySelector('.navegación');           //para agregarlo al documento HTML
// navegación.appendChild(nuevoEnlace)
// console.log(nuevoEnlace);



//Eventos

// console.log(1);

// window.addEventListener('load', function(){     //load espera a el JS y todos los archivos que dependan el HTML esten listos (incluyendo css y imagenes)
//     console.log(2);

// });

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded' , function(){              //DOMContentLoaded solamente espera a que se descargue el HTML, pero no espera css o imagenes
//     console.log(4);
// })

// console.log(5);


//seleccionar elementos y asignarles un evento

// const enviar = document.querySelector('.boton--formulario');
// enviar.addEventListener('click' , function (evento){
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando...');
// });


//Eventos en inputs y textareas
const datos = {
    nombre : '',
    email : '',
    textarea : ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#textarea');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto (evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}




//Evento de submit             (PARA VALIDAR FORMULARIOS)

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();







//validar el formulario

const {nombre, email, textarea} = datos;

console.log(nombre);
console.log(email);                                              //DESTRUCTURING
console.log(textarea);

//ERROR
if(nombre === ''|| email ===''){
    mostrarError('Todos los campos son obligatorios')
    console.log('El nombre o el email estan vacios');
    return;  //Corta la ejecucion del codigo (no se ejecutaria "enviendo formulario...")
}

//APROBADO
mostrarAprobacion('BIEN NEENEEEEE')

function mostrarAprobacion(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('aprobado');
    formulario.appendChild(alerta);
}

setTimeout(() => {
    alerta.remove();                                                                  //NOSE PORQUE MIERDA NO FUNCIONA
},2000);

//Mostrar error en pantalla

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error')
    formulario.appendChild(error);
}

//Que desaparezca despues de 1segundo

setTimeout(() => {
    error.remove();                                                                  //NOSE PORQUE MIERDA NO FUNCIONA
}, 2000);


//enviar el formulario






    //console.log('enviendo formulario...');
})



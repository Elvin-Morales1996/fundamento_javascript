/* 
para imprimir mensaje  en la consola

console.log("hola");
console.error("esto es un error");
console.warn("advertencia");

************************************************************************************************

ECMASCRIPT 2020= VERSIONES DE JAVASCRIPT
TYPESCRIPT: es para que una variable cambie
ejemplo nombre:string
tipado: es tipo de datos que se le da a una varible


var nombre = "elvin";
console.log(nombre);

let nombre3  = "dfkjvnke";
console.log(nombre3);

const nombre2 = "fkvgfnfkj";
console.log(nombre2)

let a = "mensaje de prueba";
a = 27;
a=true;


console.log(a);
const name = 25;
console.log(`mi edad es ${name} `)
/************************************************** 
*/
/*
/*forma 1 */
/*
function mensaje(){
  console.log("funcion que da mensaje")
}

const mensaje2 = function(){
  console.log("funcion de forma 2")
}

/*funciones de flecha 
const mensaje3 = ()=>{
  console.log("funcion de flecha")
}


mensaje() 
mensaje2() 
mensaje3()  

const sumar = (a, b)=>{
  return a+b;

}

console.log(sumar(5,5));
/*Backticks `` */
/*
console.log(`la suma es: `+sumar(5,5));
console.log(`la suma es: `,sumar(5,5));
console.log(`la suma es: ${sumar(5,5)}`);*/


/*arreglos */

/*

const navidad =['🧑‍🎄','🎅','☃️']

console.log(navidad)

//agregar un nuevo elemento

navidad.push('🍿');

console.log(navidad)

//eliminar

navidad.pop()
console.log(navidad)

//cuantos elementos hay

console.log(`tu lista de navidad hay: ${navidad.length}`)

//seleccionar un elemento de su posicion
console.log(`seleccionado: ${navidad[0]}`)


//reemplazar especificamente

navidad[1]= '🍕';
console.log(navidad)


//eliminar especificamente

delete navidad[0];
console.log(navidad)



//MAPEAR LOS ARREGLOS

for(let i=0; i<navidad.length; i++){
  console.log(navidad[i])
}

//MAPEAR ES COMO EL FORECHA
navidad.map((navi)=>{
  console.log("<br>"+navi)

})


navidad.forEach((navi)=>{
  console.log("<br>"+navi)
})
*/

/* OBJETOS PARA JAVASCRIPT */
/*
const onjeto = {
  nombre: 'elvin',
  edad: 27,
  email: 'morales.elvin@gamil.com',
  profesion: 'estudiante ingenieria en sistemas informaticos'
}




/*
console.log(onjeto)

//mostrar solo el nombre

console.log(onjeto.nombre)
*/
//destructuring
/*
const{nombre, profesion} =onjeto

console.log("el nombre es: "+nombre)
console.log("la profesion es: "+profesion)
*/


//arreglos de objetos
/*
const personas=[
  {
    nombre: 'elvin',
    edad: 22,
    email: 'morales.elvin@gamil.com',
    profesion: 'estudiante ingenieria en sistemas informaticos'
  },
  
  {
    nombre: 'a',
    edad: 23,
    email: 'morales.elvin@gamil.com',
    profesion: 'estudiante ingenieria en sistemas informaticos'
  },
  {
    nombre: 'c',
    edad: 23,
    email: 'morales.elvin@gamil.com',
    profesion: 'estudiante ingenieria en sistemas informaticos'
  },
  
  ]

//imprimi normal
console.log(personas[0].nombre)

//imprimi normal

personas.map((person)=>{
  console.log(person.nombre)
  console.log(person.profesion)
})
*/

//DOM 

//poner modo oscuro

const cuerpo = document.querySelector('body')
const botones =document.querySelector('button')
const carts = document.getElementById('carta')

let activar;

//definir una funcion que se ejecuta cuando el html se cargue
document.addEventListener("DOMContentLoaded",()=>{
  console.log("contenido cargado")
  activar = !activar;

if(activar==true){
console.log(`modo oscuro ${activar}`)
//agregar texto
botones.innerHTML="modo oscuro"

//agregar btn dark
botones.classList.add("btn-dark")
cuerpo.classList.add("bg-dark")



}else{
  console.log(`modo blanco ${activar}`)
  botones.innerHTML="modo claro"
  //agregar btn claro
botones.classList.remove("btn-dark")
botones.classList.add("btn-light")
cuerpo.classList.replace("bg-dark","bg-light")
}
});


const oscuro= ()=>{
  activar = !activar;

if(activar==true){
console.log(`modo oscuro ${activar}`)
//agregar texto
botones.innerHTML="modo oscuro"


//agregar btn dark
botones.classList.add("btn-dark")
carts.classList.add("text-bg-dark")
cuerpo.classList.add("bg-dark")



}else{
  console.log(`modo blanco ${activar}`)
  botones.innerHTML="modo claro"
  //agregar btn claro
  botones.classList.replace("btn-dark","btn-light")
  carts.classList.replace("text-bg-dark","text-bg-light")
  cuerpo.classList.replace("bg-dark","bg-light")
/*  botones.classList.remove("btn-dark")
botones.classList.add("btn-light")*/
}
}
































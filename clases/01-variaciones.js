 //alert('Hola Mariano')



// declaracion e iniciacion de una variable
let nombre = "Mariano"; // (para declarar en el ambito donde se use)
var apellido = "Stordeur Ciancaglini";
const PI = 3.14; // (const define una variable que no puede modificarse)

nombre = " Mariano Ulises"
console.log("Nombre: ",nombre)
console.log("Apellido: ",apellido)


//function main() {
//   var apellido = "Ciancaglini" // (para declarar en el ambito global - sin importar donde se us)e
//    console.log("apellido Local: ", apellido);
//}
//main() 
//    apellido = "Stordeur";
//    console.log("Apellido global: ", apellido);


// TIPO DE DATOS

// PRIMITIVOS

// STRING / CADENA DE TEXTO 

let vendedor = "Agustin";
let vendedor2 = 'Tomas';
console.log("Vendedor: ", typeof vendedor)

// Number
let edad = 19;
console.log("Edad: ",typeof  edad)

//Boolean / Buleanos
let verdadero = true
let falso = false
console.log("Veradero: ", typeof  verdadero)
console.log("Falso: ", typeof falso)
// null / nulo
let dinero = null;
console.log("Dinero: ", typeof null)

// undefined / indefinido 
let sueldo;
console.log("Sueldo: ", typeof undefined)

// COMPLEJOS 

// Array / Arreglo
let Arreglo = [1, 2, 3, 4, 5]


//Object / Objeto 
let persona = {
    nombre: "Mariano",
    apellido: "Stordeur",
    edad: 19,
    ciudadNatal: "Tucumán",
} 

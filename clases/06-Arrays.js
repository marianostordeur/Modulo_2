// let frase ="Hola Mundo"
// frase= frase + "Como estan?"

// const myArray =[1, "Pedro", true, false, "Juan"];

// console.log(myArray)


// /* console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]); */

// /* let limite = myArray.length;

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
//     if (i <= limite) {
//         myArray.push("Juan");
//     }
// } */

// let listadenombres = []
// let nombre = []
// do {
// nombre = prompt("Ingrese un nombre");

// if (!!nombre){
//     listadenombres.push(nombre)
// }

// } while (nombre);

// console.log(listadenombres)

// // listadenombres[5] = "UNO"
// listadenombres.splice(0, 0, "Jose");

// for (let i = 0; i < listadenombres.length; i++) {
//     console.log(`en la posicion ${i} esta el elemento: ${listadenombres[i]}`);

// }


// document.write("Hola Mundo JavaScript") --ESCRIBE EN LA HOJA--


const alumnos = ["Mariano", "Ili", "Ulises"];

// -- AGREGAMOS UN ELEMENTO AL FINAL DEL ARRAY--
alumnos.push("mateo");

// -- AGREGAMOS UN ELEMENTO AL PRINCIPIO DEL ARRAY--
alumnos.unshift("jc");

// -- ELIMINAR EL ULTIMO ELEMENTO
alumnos.pop("");

// -- ELIMINAR EL PRIMER ELEMENTO
alumnos.shift();

// LA POSICION / INDEX DE UN ELEMENTO
let pos = alumnos.indexOf("Ili");

// SABER SI UN ELEMENTO EXISTE 
console.log(alumnos.includes(`Mariano`));
console.log(alumnos.includes(`Stordeur`));

const profes = ["Nicolas", "Enrico"];
 const comision87i = alumnos.concat(profes);

console.log(alumnos);
console.log(profes);

console.log(comision87i.sort());
console.log(comision87i.reverse());

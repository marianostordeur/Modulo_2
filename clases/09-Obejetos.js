const alumno = {
    apellido: "Stordeur",
    comision: "87i",
    curso: "Fullstack",
    edad: "19 años",
    nombre: "Mariano",

    saludar: function () {
        console.log('Hola! soy ${this.nombre}');
    },
    estudiar()  {
        console.log('leyendo... resumiendo...');
    },
    presentarse: () => { // No me sale!!!
        console.log('Nombre: ${this.nombre}')
        console.log('apellido: {this.apellido}')
        edad: {this.edad}
        curso: {this.curso}
        comision: {this.comision}
    }
};

// OBTENCION DE VALORES
console.log(alumno.nombre)
let x = 'comision';
console.log(alumno[x]);

// AGREGAR PROPIEDADES NUEVAS
alumno.ciudad = 'Tucuman'
let newProp = prompt("Agrega una nueva porpiedad");
let newPropvalor = prompt('Ingrese el valor de la propiedad ${newProp}');
alumno[newProp] = newPropvalor; 



// Modificar propiedades
alumno.edad = 20;

// Eliminar propiedades
delete alumno.curso;

// Recorrer un objecto

/* for (let index = 0; index < Object.keys.length; index++) {
   console.log(alumno[Object.keys(alumno)[index]])
    
}
 */


// Ahora
 for (const key in alumno) {
    console.log(key);
    console.log(alumno[key]);
/*     if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    } */
} 
console.log(alumno);
alumno.saludar()
alumno.estudiar()
alumno.presentarse()
document.write(alumno);
alert(alumno);
console.log()
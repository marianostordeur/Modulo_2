/* const notas1 = [5, 7, 10, 8];
const notas2 = [7, 8, 8, 8];

// FUNCION DECLARATIVA 
function promediar(notas) { 

    let sumatoria = 0;
    
    for (let index = 0; index < notas.length; index++) {
        sumatoria += numeros[index];
    };
    
    let promedio = sumatoria / notas.length;

    return promedio;
    
}

let promedio1 = promediar(notas1);
let promedio2 = promediar(notas2); 

// FUNCION EXPRESIVA / FUNCION ANONIMA
const mostrarPromedio = (notas, callbacks) => {
    console.log(`las notas son: ${notas}`);
    let promedio = callbacks(notas);
 console.log(`El Promedio de las notas todo el año es: ${promedio}`)
};
mostrarPromedio(notas1,promediar );
mostrarPromedio(notas2, promediar);

// CALLBACKS */

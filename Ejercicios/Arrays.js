// CREAR UN ARRAY LLAMADO MESES Y QUE ALMACENE EL NOMBRE DE LOS DOCE MESES DEL AÑO.
// MOSTRAR POR PANTALLA EN FORMA DE LISTA LOS DOCE NOMBRES DEL ARREGLO

const meses = [
 'Enero',
 'Febrero',
 'Marzo',
 'Abril',
 'Mayo',
 'Junio',
 'Julio',
 'Agosto',
 'Septiembre',
 'Octubre',
 'Noviembre',
 'Diciembre'
];

let mesespantalla = `<ul>`

for (let index = 0; index < meses.length; index++) {
    const element = meses[index];
    mesespantalla += `<li> ${meses[index]}</li>`;
    if (index === meses.length -1) { 
        mesespantalla += `</ul>` 
    }
}

document.write(mesespantalla);
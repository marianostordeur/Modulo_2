/* 
5- Realizar una pagina con un script que 
calcule el valor de la letra de un numero
de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El numero debe ser entre 0 y 9999999
Debemis calcular el resto de la division entera (%) entre el numero (DNI) y el numero 23(cantidad de letras + 1)
segun el resultado, de 0 a 22, le correspondera una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un numero debera indicarse con un alert y volver a preguntat.
Debera de repetirse el proceso hasta que el usuario pulse <<cancelar>>

Ejemplo:
Input : 45275486
Output: 'L'
*/


let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
let dni;
do {
    dni = prompt("Ingrese un DNI valido");
    if (dni) {
    if (isNaN(dni)) {
     alert('Ingrese un numero valido');
    } else{
        let posicion = dni % letras.length;
        alert(letras[posicion]);
    }
 }
} while (dni);
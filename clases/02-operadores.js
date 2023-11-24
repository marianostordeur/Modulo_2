let num1 = Number (prompt ("Ingrese el primer numero: "));
let num2 = Number (prompt('Ingrese el segundo numero: '));

//01-OPERADORES DE ASIGNACION

//num1 += 5; // num1 = num1 + 5; 

// 02-OPERADORES ARITMETICOS

// SUMA
//let suma = num1 + num2;
//console.log("suma = ", suma);

// RESTA
//let resta = num1 - num2;
//console.log("resta = ", resta);

// MULTIPLICACION 
//let multiplicacion = num1 * num2;
//console.log("multiplicacion = ", multiplicacion);

// DIVISION
//let division = num1 / num2;
//console.log("division = ", division);

// RESTO

//let resto = num1 % num2;
//console.log("resto = ", resto);

// OPERADORES UNITARIOS

// INCREMENTO
//num1++;
//console.log('incremento ', num1)

// DECREMENTO
//num2--;
//console.log('decremento ', num2)

//let verdadero = !false;
//let falso = !true;


// 04- OPERADORES RELACIONADOS
console.log(num1 + 'y'  + num2 + "son iguales",num1 == num2);
console.log(num1 + 'y'  + num2 + "son diferentes", num1 != num2);
console.log(num1 + 'mayor que' + num2 + '?', num1 > num2 );
console.log(num1 + 'menor que' + num2 + '?', num1 < num2 );
console.log(num1 + 'es mayor o igual que' + num2 + '?', num1 >= num2 );
console.log(num1 + 'es menor o igual que' + num2 + '?', num1 <= num2 );


console.log(num1 + 'y' + num2 + ' son estrictamente iguales? ', num1 === num2);
console.log(num1 + 'y' + num2  + ' son estrictamentes diferentes? ', num1 !== num2);

// 05- OPERADORES LOGICOS

// AND
console.log('AND: ', true && true);
console.log('AND: ', true && false);
console.log('AND: ', false && true);
console.log('AND: ', false && false);

// OR
console.log('OR: ', true || true);
console.log('OR: ', true ||false);
console.log('OR: ', false || true);
console.log('OR: ', false || false);

// NOT
 console.log('NOT: ', !true);
console.log('NOT: ', !false);
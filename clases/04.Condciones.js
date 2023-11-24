/* if (true) {
    console.log("hola");
    alert("chau");
} */
 
/* let edad = parseInt (prompt("Ingrese su edad"));

if (edad >= 18) {
console.log ("Sos mayor de edad");
}else {
    console.log("Sos menor de edad");
} */

/* let num1 = parseInt(prompt("Ingrese un numero"));
/* let num2 =parseInt(prompt ("Ingrese otro numero")); */
/* if (num1) {
    console.log(num1);

    if ((num1 % 2) === 0) {
        console.log("El numero $(num1) es par");    
    } else {
        console.log("El numero ${num1} es impar")
    }
} */
 
let letra =prompt("Ingrese una letra");
if (letra.length >1) {
    console.log("Ingrese solo una letra");
  /*   return; */
}else{

switch (letra) {
    case 'a':
        console.log('pa')
        break;
        default:
            console.log('Ingrese alguna letra vocal')
}
}
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const numbers = [1, 6, 23, 5, 10];


const result = words.filter((word) => word.length > 6);

function Filter(array) {
    const trueArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length > 6) {
        trueArray.push(array[index])
        }
    }
    return trueArray;
}

const result2 = Filter(words);

/* console.log('Result 1: ', result);
console.log('Result 2: ', result2); */

console.log(words);

console.log(numbers);
words.sort((a, b) => a - b);
words.sort((a, b) => b - a);
console.log(numbers);
console.log(numbers);
let resultadobusqueda = words.find((word) => word.length > 6)
console.log(resultadobusqueda);

for (let index = 0; index < words.length; index++) {
    console.log(words[index])    
}

words.forEach((word) => console.log(word))

numbers.forEach((number) => {
    console.log(number);
    number *= 2;
});

const number2 = numbers.map((number) => number * 2);
console.log(numbers);
console.log(number2);
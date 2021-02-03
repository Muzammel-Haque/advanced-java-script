const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }
// console.log(output)

// const result = numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// const result = numbers.map(x => x * x);
// console.log(result)

// const result = numbers.filter(x => x<5);
// console.log(result)

const result = numbers.find(x => x >= 5);
console.log(result)
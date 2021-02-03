const actors = [
    {id: 11, name: "omar sunny"},
    {id: 21, name: "Omit Hasan"},
    {id: 31, name: "Manna"},
    {id: 11, name: "Deepjol"},
    {id: 11, name: "Riaz"},
];
// const output = [];
// for (let i = 0; i < actors.length; i++) {
//     const element = actors[i];
//     const actorsName = element.name;
//     output.push(actorsName);
    
// }
// console.log(output);

const output = actors.map(x => x.name);
const result = output.filter(x => x.length<=5)
const result1 = actors.map(x => x)
const result2 = result1[0];
console.log(result2)
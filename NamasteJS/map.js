// const arr = [5, 1, 3, 2, 6];

// // Double - [10, 2, 6, 4, 12]

// // Triple - [15, 3, 9, 6, 18]

// // Binary - ['101', '1', '11', '10', '110']

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2)
// }
// const outputD = arr.map(double)

// // syntax using a function inside map()
// const outputT = arr.map(triple)
// const outputT1 = arr.map(function triple(x) {
//     return x * 3;
// })

// // syntax using arrow function inside map()
// const outputB = arr.map(binary)
// const outputB1 = arr.map((x) => x.toString(2))

// console.log(outputD,' ' ,outputT, ' ' ,outputB);
// console.log(outputT1,' ', outputB1); 


const users = [
    {firstName: "akshay", lastName: 'saini', age:26},
    {firstName: "donald", lastName: 'trump', age:75},
    {firstName: "elon", lastName: 'musk', age:50},
    {firstName: "deepika", lastName: 'padukone', age:26},
];

const outputNames = users.map(x => x.firstName+' '+x.lastName)
console.log(outputNames);
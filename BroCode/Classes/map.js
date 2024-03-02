// .map() = accepts a callback and applies that function 
//          to each element of an array, then returns a new array

//  difference b/w map and forEach
//     map     : returns a new array with the applied function and original array remains
//     forEach : changes the original array


const dates = ['2024-1-10', '2025-2-20','2030-3-30'];
const formattedDates = dates.map(formatDates)

console.log(formattedDates);

function formatDates(element){
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}









// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// console.log(cubes);
// console.log(squares);


// function square (element){
//     return Math.pow(element, 2)
// }
// function cube(x){
//     return x * x * x
// }
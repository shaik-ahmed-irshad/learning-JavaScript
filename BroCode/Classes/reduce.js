//  .reduce() = reduces the elements of the array to a single value


const grades = [72, 87, 80, 78, 95]

const max = grades.reduce(getMax)
const min = grades.reduce(getMin)
console.log(`Top Grade is ${max} and Min Grade is ${min}`);

function getMax(accumilator, element){
    return Math.max(accumilator, element);
}

function getMin(accumilator, element){
    return Math.min(accumilator, element);
}




// const prices = [5, 30, 10, 25, 15, 20]

// const total = prices.reduce(sum)
// console.log(`$${total.toFixed(2)} `);


// function sum(accumilator, element){
//     return accumilator + element
// }

// // function sum(previousElement, nextElement){
// //     return previousElement + nextElement; 
// //     // 0 + 5
// //     // 5 + 30
// //     // 35 + 10..
// // }
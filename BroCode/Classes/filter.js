// .filter() = creates a new array by filtering out elements
//  by default only return array with elements of TRUE condition 

const words = ['apple', 'orange', 'banana', 'kiwi', 'pomegranate', 'coconut','pineapple', 'guava']
const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)

console.log(longWords);
console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6 
}










// ------------------------------------------
// const ages = [14,16,17,18,18,19,20,40,70]
// const adults = ages.filter(isAdult)
// const children = ages.filter(isChild)

// console.log(adults);
// console.log(children);

// function isAdult(element){
//     return element >= 18
// }

// function isChild(element){
//     return element < 18
// }
// ------------------------------------------

// let numbers = [1,2,3,4,5,6,7]
// let evens = numbers.filter(isEven)
// let odds = numbers.filter(isOdd)

// console.log(odds);
// console.log(evens);

// function isEven(element){
//     return element % 2 === 0; // returns TRUE. which then, .filter() filters out with elements with the TRUE conditions and makes a new array
// }
// function isOdd(element){
//     return element % 2 !== 0; 
// }
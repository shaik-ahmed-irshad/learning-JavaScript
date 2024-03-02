// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)


// let numbers = [1, 2, 3, 4, 5]
// let sep = [...numbers]
// let maximum = Math.max(...numbers)
// let minimum = Math.min(...numbers)

// console.log(maximum);
// console.log(minimum);
// console.log(sep);

// let username = 'Ahmed Irshad'
// let letters = [...username].join('-')

// console.log(letters);

let fruits = ['apple', 'banana', 'orange']
let vegetables = ['carrots', 'celery', 'potatoes']

let foods = [...fruits, ...vegetables, 'eggs', 'milk']

console.log(foods);
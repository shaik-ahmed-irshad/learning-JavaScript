// // what are higher order functions?

// function x() {
//     console.log(' i am a callback function');
// }

// function y(x) {
//     x();
// }

// // y is higher order function since it takes x as an argument in it.

// // Examples

// // cal area of radii
// const radius = [3,1,2,4]

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i=0; i < radius.length; i++ ) {
//         output.push(Math.PI * radius[i] * radius[i] )
//     }
//     return output
// }

// console.log(calculateArea(radius));

// // cal circumference of radii
// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i=0; i < radius.length; i++ ) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }

// console.log(calculateCircumference(radius));


// // cal dia of radii
// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i=0; i < radius.length; i++ ) {
//         output.push(2 * radius[i])
//     }
//     return output
// }

// console.log(calculateDiameter(radius));

// observations from above code: 
// almost 90% of the code is repetative 
// not a good practice of writing a code
// no efficient use of functional programming
// (modularity, reusablility, optimised)
// break your code into smaller functional units

// more efficient way of writing the same code. we need abstract the logic out and make it do only one task. also write one generic function.

const radii = [3,1,2,4]

const area = function (radii) {
    return Math.PI * radii * radii
}

const circumference = function (radii) {
    return 2*Math.PI*radii
}

const dia = function (radii) {
    return 2*radii
}

// generic logic function

const calculate = function (radius, logic) {
    const output = [];
    for (let i=0; i < radius.length; i++ ) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radii, area));
console.log(calculate(radii, circumference));
console.log(calculate(radii, dia));
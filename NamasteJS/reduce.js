// const arr = [5, 1, 3, 2, 6];

// //sum or max

// const output1 = arr.reduce(function (max, curr) {
//     if(curr > max ) {
//         max = curr;
//     }
//     return max;
// }, 0);

// console.log(output1);



const users = [
    {firstName: "akshay", lastName: 'saini', age:26},
    {firstName: "donald", lastName: 'trump', age:75},
    {firstName: "elon", lastName: 'musk', age:50},
    {firstName: "deepika", lastName: 'padukone', age:26},
];

// { 26: 2, 75: 1, 50: 1 }
const output = users.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];        
    }
    else {
        acc[curr.age] = 1;
    }
    return acc
}, {})


console.log(output)
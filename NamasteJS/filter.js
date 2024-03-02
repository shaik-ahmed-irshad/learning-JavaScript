const arr = [5, 1, 3, 2, 6];

//filter odd values

function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}

const odd = arr.filter(isOdd)
const even = arr.filter(isEven)

const greater = arr.filter((x) => x > 4)


console.log(odd, even, greater);


const users = [
    {firstName: "akshay", lastName: 'saini', age:26},
    {firstName: "donald", lastName: 'trump', age:75},
    {firstName: "elon", lastName: 'musk', age:50},
    {firstName: "deepika", lastName: 'padukone', age:26},
];

const output = users.filter((x) => x.age < 30).map((x) => x.firstName)


console.log(output)
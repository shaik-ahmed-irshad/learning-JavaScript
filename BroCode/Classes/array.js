// array = a variable like structure that can hold more than 1 value

let fruits = ['apple', 'banana', 'orange', 'coconut']


for(let i = fruits.length - 1; i>=0; i--){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse()

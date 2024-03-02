// callback =  a function that is passed as an argument to another function 
// used to handle async operations:
//                1. Reading a file
//                2. Network requests
//                3. Interacting with databases


hello(goodBye, leave)


function hello(callback, callback2){
    console.log('Hello!');
    callback2()
    callback()

}

function goodBye(){
    console.log('GoodBye!');
}

function leave(){
    console.log('Leave!');
}
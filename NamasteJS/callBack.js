// What is Callback Funtion in JS
setTimeout(function () {
    console.log('timer');
},3000)

function x(y) {
 console.log('x');
 y()
}
x(function y(){
    console.log('y');
})
// y() :Ref error Y isnt defined
/*
 here function y is called callback function
 callback function give the power of async to js
 setTimeout is a function that takes another function as arguments
 */
// Function Statement AKA Function Declaration.
function a() {
    console.log('a called');
}
a();


// Function Expression
var b = function () {
    console.log('b called');
}
b();

/* Difference b/w expression and statement: ans= "hoisting". meaning you can't call 'Function Expression' before initializing it, unlike 'Function Statement' example given below */

c();
// d();
// Function Statement
function c() {
    console.log('c called');
}
//output: 'c called'

// Function Expression
var d = function () {
    console.log('d called');
}
//output: TypeError: d is not a function

// Anonymous Function 

// function () {

// }
// output : SyntaxError: Function statements require a function name
/* 
uses of anonymous function: 
can be used as values to  variables. see above examples of funtion expression
*/ 

// Named Function Expression

var e = function xyz() {
    console.log('e is called');
}
e();
/* 
catch here: what if we call the function 
xyz();
this will give refrence error:xyz isn't defined.
why? : cuz its just created in local scope and not global. it can be used inside the function it self but not outside
*/


// Difference b/w Paramaters & Arguments

var f = function (param1,param2) {
    console.log('f called', param1,param2);
}
f('arg1', 'arg2');
f(1,2);
/* 
values passed inside the function call are called arguments "arg1, arg2, 1, 2"
and the labels used inside the function itself are parameters 'param1, param2'
*/


// First Class Functions AKA First class citizens
/*
ability to use functions as values. meaning functions cab be passed as arguments to another function and can be returned back from the function. this ability is called first class function
*/
var ff = function (param) {
    console.log(param);
}

ff (function () {

})

function xyz() {

}

ff(xyz)

var ff2 = function (param) {
    return function rf() {
        
    }
}
console.log(ff2());

// Arrow Functoins

// function =  A section of reusable code.
//             Declare code once, use it whenever you want.
//             Call the function to execute that code.


// birthday function
function happyBirthday(username, age){
    console.log('happy birthday to you');
    console.log('happy birthday to you');
    console.log(`happy birthday dear ${username}`);
    console.log(`you are ${age} years old`);
}

// happyBirthday('Ahmed' , 25)
// happyBirthday('Ishraq' , 26)

// math functions
function add(x, y){
    return x + y
}
function subtract(){
    return x-y
}
function multiply(x, y){
    return x*y
}
function divide(x,y){
    return x/y
}
function isEven(number){
    if (number % 2 == 0){
        return `${number} is Even` 
    }
    else {
        return `${number} is not Even`
    }
}
function isValidEmail(email){

    return email.includes('@') ? true : false
}

result = isEven(5)
emailCheck = isValidEmail('ahmed@code.in')
console.log(emailCheck);
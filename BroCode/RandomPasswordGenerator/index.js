// Random Password Generator

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxys';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456879';
    const symbolChars = '!@#$%&'

    let allowedChars = '';
    let password = '';
    
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';
    
    if(length < 8) return `password length must be atleast 8 chars `
    if(allowedChars.lenght === 0 ) return  `At least 1 set of characters needs to be selected`
    for(let i=0; i< length ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }
    return password
}


const passwordLength = 8;
const includeLowercase = false;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeNumbers,
                                includeSymbols,
                                includeUppercase);

console.log(`Generated password: ${password}`);
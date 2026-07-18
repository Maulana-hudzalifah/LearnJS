function
    generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbol){

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numberchars = "1234567890";
    const symbolchars = "!@#$%^&*()_+-=";

    let allowedchar = "";
    let password = "";
    
    allowedchar += includeLowercase ? lowercasechars : "";
    allowedchar += includeUppercase ? uppercasechars : "";
    allowedchar += includeNumbers ? Numberchars : "";
    allowedchar += includeSymbol ? symbolchars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedchar.length === 0){
        return `(At least 1 set of character needs to be selected )`;
    }

    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomindex];
    }
    return password;
}





const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbol = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbol);
console.log(`Generated password: ${password}`)
// --------------------------------------------------------Dice Roller Programm-------------------------------------------------------------------


function roll() {
    const numofdice =Number( document.getElementById("numofdice").value) ;
    const diceresult= document.getElementById("diceresult");
    const diceimages= document.getElementById("diceimages");
    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);

        values.push(value);
        images.push(`<img src="dice img/${value}.png">`);
    }
    diceresult.textContent = `dice: ${values.join(' ,')}`;
    diceimages.innerHTML = images.join('');
}



//-------------------Random password generator ---------------------------------------------------- 
function generator ( length, includeLowercase, includeNumbers, includesymbols, includeUppercase) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbols = "!@#$%^&*()_+";


    let allowed = "";
    let password = "";

    allowed += includeLowercase ? lowercase : "";
    allowed += includeUppercase ? uppercase: "" ;
    allowed += includeNumbers ? number: "";
    allowed += includesymbols ? symbols: "";

    if (length <= 0) {
        return `(password length must be at least 1)`;
    } 
    
    if (allowed.length === 0) {
        return `(At least 1 set of character needs to be selected)`;
    }
    for (let i = 0; i < length; i++) {
        const random =  Math.floor(Math.random() * allowed.length );
        password+= allowed[random];
    }
        
    

    return password;
    
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includesymbols = true;

const password= generator (passwordLength,includeLowercase, includeNumbers, includeUppercase, includesymbols)

console.log(`Generated password: ${password}`);



//--------------------------------------------Callback function-----------------------------------------


sum(displayPage, 1, 2);

function sum(callback, x, y) {
    let result = x + y ;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
    
}

function displayPage(result) {
    document.getElementById("h1").textContent = result;
}
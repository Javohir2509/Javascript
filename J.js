// //first
// function isBigEnough(value) {
//     return value >= 0;

// }

// const num1 = [1, 2 , -3, -9 , 4 , -7, 5].filter(isBigEnough);
// console.log(num1);

// //second
// const isPositive = (Value) => Value > 0;
// const array1 = [2, 5 , 75, 15 , 1];
// console.log(array1.every(isPositive));

// //third
// let let1 = [1, 2 , 3];
// let let2 = [4, 5, 6];
// console.log(let1.concat(let2));

// //fourth
// const con1 = [12, 15, 18, 21, 25];
// console.log(con1.slice(2, 4));

// //fifth
// const num5 = [ 55, 35, 85, 95 , 15, 5,] ;
// console.log(num5.sort((a, b) => a - b));

// //sixth
// const num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num6.reverse());

// //seventh
// const num7 = ["dog" , "cat" , "pig" , "bird"];
// console.log(num7.join(','));


// //#1
// function showDb () {

// }

// let private = {
//     name: "Javohir" ,
//     surname: "Iskandarov" ,
//     age: 15 ,
// }

// let b;

// if (private){
//     console.log(private);
    
// } else {
//     console.log(b);
    
// } 


// //#2
// for (let j=1; j<4; j++ ) {
//     const a = prompt(`Yaxshi ko'rgan janringiz qaysi ${j}`);
//   console.log(a);
// }

// logical operators

// const isSunny = true;

// if(isSunny){
//     console.log("It is sunny");
    
// } else{
//     console.log("It is cloudy");
    
// }




//Number guessing game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * ((maxNum - minNum + 1)) + minNum );

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess);

// if(isNaN(guess)){ 
//     window.alert("Please enter a valid number");
// } else if (guess < minNum || guess > maxNum){
//     window.alert("Please enter a valid number");
// } else{
//     attempts++;
//     if(guess < answer){
//         window.alert("Too low try again");
//     } 
//     else if(guess > answer){
//         window.alert("Too high try again");
//     } 
//     else {
//         window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
//         running = false ;


//     }
    
   
// }

// console.log(guess);
// console.log(attempts);
//     }














const textbox = document.getElementById("textbox");
const Fahrenheit = document.getElementById("Fahrenheit");
const Celsius = document.getElementById("Celsius");
const result= document.getElementById("result");
let temp;





function convert() {
    
if (Fahrenheit.checked) {
     temp = Number(textbox.value) ;
     temp = temp * 9/5 + 32;
     result.textContent = temp.toFixed(1) + "°F";
} 
else if (Celsius.checked) {
    temp = Number(textbox.value) ;
    temp = (temp-32)*(5/9);
    result.textContent = temp.toFixed(1) + "°F";

} else{
    result.textContent = "Select a unit";
}

}









// ---------------------------Array----------------------------



//Array = a variable like structure that can hold 
// more than 1 value  







//---------------------------------------------------------------------------

// Spread operators = ...allows an iterable such 
//                      as an array  or string  to be expanded into separate elements
//                      (unpacks the elements)


// let numbers = [1,2,3,4,5];

// let max = Math.max(...numbers);
// let min = Math.min(...numbers)

// console.log(max);
// console.log(min);

//------------

// let user = "Jack Frost";
// let letters = [...user].join("-");

// console.log(letters);

//------------


// let fruits = ["apple", "pear", "banana", "melon", "mango"];
// let vegs = ["potato", "tomato", "cabbage"]

// let food = [...fruits, ...vegs, "chocolate" , "milk"];

//     console.log(food);
    
   
    
//--------------------------------------------------------------------------------



 //rest parameters = (...rest) allow a function work with a variable
 //                  number  of arguements by bundling them into an array

 //                  spread = expands an array into  separate elements 
 //                  rest = bundles separate elements into an array

//  function fridge(...fruits) {
//     console.log(...fruits);
    
//  }

//  const fruit1 = "apple";
//  const fruit2 = "banana";
//  const fruit3 = "melon";
//  const fruit4 = "pear";
//  const fruit5 = "watermelon";


//  fridge(fruit1,fruit2,fruit3,fruit4,fruit5)

//----------


function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
        
    }
    return result ;
}

const total = sum(1, 2, 3, 4, 5,6,7,8,9,10);
console.log(`Your total is $${total}`)

//----------





function combineString(...strings) {
    return strings.join(" ");
}


const fullname = combineString("Mr" , "Jack", "Frost", "Sir")

console.log(fullname);

//-----------------------------------------------------------------------------------


//------------------------------------------------------------------------------------











//#1
const array1 = [14, 7, 5, 17 , 52 , 60]
const res = array1.find((num) => num%7==0 && num<10)
console.log(res);

//#2
let numbers = [2,3,5,3,4,9,8,7,5,6,2,12,32,62,65]
numbers.forEach((num)=> num%2==0 && console.log(num*2) );

//#3
const words = ["me","him" , "you" , "it" ,"she" , "they" , "we "];
 words.map((words)=> console.log(`${words}:${words.length}`));

 //#4
 const number1 = [1,2,3,5,6,48,75,12,62,35,18,95];
 const num = number1.some((num) => num>0);
 console.log(num);

 //#5
const animals =["dog", "cat" , "horse"];
const search = animals.find((string)=> string =="cat" ) 
if (search == undefined) {

 console.log("Not found");
 
} else {
    console.log(search);
    
}

// #6
const array2 = [12, 15 ,31, 95, 65]
const arr = array2.splice(1, 2, 100 && 100 , 200)
console.log(array2);

//#7

const fruit =["apple" , "melon"  , "pear"]
let arr1 = fruit.indexOf("mango")
if (arr1== -1) {
    console.log("Not found");
    
} else {
    console.log(arr1);
    
}

//#8
const array3 = ["dvsdjns", " fvgfsdnhgf", "JavaScript"]
const arr3 = array3.find((string)=> string== "JavaScript")
if (arr3 == "JavaScript") {

    console.log( `${arr3} = ${arr3.length}`);
    
}






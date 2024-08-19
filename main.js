//---------------------------------------------*Super-keyword*------------------------------------------------


class Animal {
    constructor(name, age) {
        this.name = name ;
        this.age = age;
    }
    
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
        
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age) ;
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
        
    }
}
class Wolf extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age) ;
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        
    }
}
class Tiger extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age) ;
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const wolf = new Wolf("wolf", 2, 30);
const tiger = new Tiger("tiger", 3, 35);

rabbit.run();  


//--------------------------------------*Getter Setter  / Validate and modify*------------------------------------------------------

class Rectangle {
    constructor(width, height) {
        this.width= width ;
        this.height = height;
    }

    set width(newwidth){
        if (newwidth> 0) {
            this._width = newwidth;
        }
        else {
            console.log("Width must be a positive number");
            
        }
}   set height(newheight) {
    if (newheight> 0) {
        this._height = newheight;
    }
    else {
        console.log("Height must be a positive number");
        
    }
}

get width(){
    return ` ${this._width.toFixed(1)}cm`;
}

get height(){
    return `${this._height.toFixed(1)}cm`;
}

get area() {
    return `${(this._width * this._height).toFixed(1)}cm`;
}

}

const rectangle = new Rectangle(4,5);
rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);


//--------------------------------------------------------

// const myBtn = document.getElementById("myBtn")

// myBtn.addEventListener("click", (event) => {console.log(event);
//     alert("Hello and welcome whoever you are")
// })


//----------------------------------------Shuffle array-------------------------------------------------------------------------------

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q" , "K"] ;

// shuffle(cards)

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const random = Math.floor(Math.random() * (i+1));

//        [ array[i], array[random]] = [array[random], array[i]] ;
        
//     }
// }




//-----------------------------------------------------------Date objects ----------------------------------------------------------------------

const date = new Date();
console.log(date);     

//---------------------------------

function updateClock() {

    const now = new Date();
   let hours = now.getHours().toString().padStart(2,0);

   const meridiem = hours >= 12 ? "PM" : "AM";
   hours = hours % 12 || 12;
   hours = hours.toString().padStart(2,0)

    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

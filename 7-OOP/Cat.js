//prototypes

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.sayHi = function(){
    return `My name is: ${this.name}, hello`
}

//Cat.prototype.age = 2;

const max = new Cat('max', 'brown');
const kitty = new Cat('kitty', 'white');
const salem = new Cat('salem', 'black');

max.age = 1;

console.log(max.age); // 1
console.log(kitty.age);//undefined
console.log(salem.age);//undefined

console.log(Cat.prototype === max.__proto__);

console.log(Cat.prototype);


















/* function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.sayHi= function(){
    return `${this.name} says Hi`
}

Cat.prototype.sound = 'meow';

let kitty = new Cat('kitty', 'white');
let fluffy = new Cat('fluffy', 'black');

console.log(kitty.sound)
kitty.sound = 'woof';
console.log(kitty.sound) */
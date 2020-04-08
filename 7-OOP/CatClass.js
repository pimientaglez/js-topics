class Cat{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    sayHi() {
        return `Hola ${this.name}`;
    }
}
Cat.prototype.sound='meow';

const kitty = new Cat("kitty", "brown");
console.log(kitty);

Object.values(kitty).forEach((val)=>{
    console.log(val)
})
//console.log(Cat.prototype);

/* 
const max = new Cat('max', 'brown');
const kitty = new Cat('kitty', 'white');
const salem = new Cat('salem', 'black'); */
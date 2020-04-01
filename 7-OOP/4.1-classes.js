// es6 

class Animal{
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    getInfo(){
        return `Hola, mi nombre es ${this.nombre} y cuesto ${this.precio}`
    }
    clean() {
        return 'Báñese regularmente';
    }
}

//instance 

//console.log(myAnimal.clean());

class Fish extends Animal{
    constructor(id, nombre, precio, tipoAgua) {
        super(id, nombre, precio);
        this.tipoAgua = tipoAgua;
    }
}

const myAnimal = new Animal(1, 'animalito', 1);
const myFish = new Fish(2, 'pez leon', 200, 'dulce');

console.log(myAnimal);
console.log(myFish);
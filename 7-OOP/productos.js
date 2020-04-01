class Producto{
    constructor(id, nombre, marca, precio){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }
}



class LecheLala extends Producto{
    constructor(id, nombre, marca, precio, raza_vaca){
        super(id, nombre, marca, precio);
        this.raza_vaca = raza_vaca;
    }
}
class Samsung extends Producto{
    constructor(id, nombre, marca, precio, resolucion){
        super(id, nombre, marca, precio);
        this.resolucion = resolucion;
    }
}


const semi = new LecheLala(1, 'Leche Semidescremada', 'Lala', 20, 'contenta');
const entera = new LecheLala(2, 'Leche Entera', 'Lala', 25,'charolais');

const smart = new Samsung(1, 'Smart TV ', 'Samsung', 20, '1024x1024');
const full = new Samsung(2, 'TV FullHD', 'Samsung', 25,'2048x2048');


console.log(smart);
console.log(full)

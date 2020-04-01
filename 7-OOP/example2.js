/* function Leche(id, marca, precio){
    this.id = id;
    this.marca = marca;
    this.precio = precio;
}

Leche.prototype.getPrecio = function(){
    return this.precio;
}

var leche_lala = new Leche
(1, 'Lala', 20);
var leche_sello_rojo = new Leche(1, 'Sello Rojo', 25);

console.log(leche_lala);
 */


function Producto(id, name){
    this.id = id;
    this.name = name;
}

Producto.prototype.nameToUpperCase = function(){
    return this.name.toUpperCase();
}

 get((data)=>{
    data.forEach(element => {
        producto.push({
            element.id,
            element.marca,
            element.name
        })
    });
    producto.forEach((item)=>{
        const prod1 = new Producto(item.id, item.name)
    })
 });

 toUpperCase(name){
     return name.toUpperCase();
 }

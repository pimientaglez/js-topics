var sueldo = '$10,000';
var puesto = 'developer';
var nombre = 'Andres Perez';

function imprimeInfoEmpleado(nombre, puesto, sueldo) {
    console.log('nombre:'+nombre+ ' puesto:'+ puesto + 'sueldo: '+sueldo)
}

var empleado = {
    nombre: 'Andres Perez',
    puesto: 'developer',
    sueldo: '$10000',
    imprimeInfoEmpleado: function(){
        console.log('nombre:'+ this.nombre + ' puesto:'+ this.puesto + 'sueldo: ' + this.sueldo)
    },
    obtenerNombre: function(){
        return this.nombre
    },
    obtenerSueldo: function(){
        return this.sueldo
    },
    obtenerPuesto: function(){
        return this.puesto
    }
}
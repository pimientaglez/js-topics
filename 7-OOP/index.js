const circulo = {
    radio: 5,
    diametro: 10,
    pintar : function(){
        console.log(this);
    }

}

circulo.pintar();

// factory function
function crearCirculo(radio){
    return {
        radio: radio,
        pintar : function(){
            console.log('pintar');
        }
    
    }
}

const c2 = crearCirculo(5);
c2.pintar();

//constructor function

function Circulo(radio) {
    console.log(this);
    this.radio = radio;
    this.pintar = function(){
        console.log('pintar')
    }
}

const otroCirculo = new Circulo(5);

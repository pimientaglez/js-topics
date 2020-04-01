//creacion de promesa
function mayorDeEdad(edad){
    var promesa = new Promise((resolved, rejected) => {
        if(edad >= 18){
            resolved('Entro al antro');
        } else {
            rejected('Me sacan de la fila');
        }
    })

    return promesa;
}

const miPromesa = mayorDeEdad(17);//pending

//uso de promesas
 
miPromesa
    .then((resultado)=>{//fulfilled
        console.log(resultado)
    })
    .catch((error)=>{//rejected
        console.log(error)
    }) 

//compromiso
//estatus: pending, fulfilled, rejected














/* function mayorDeEdad(edad) {
    const promesa = new Promise((resolve, reject) => {
        if(edad >= 18){
            resolve('Mayor de edad');
        }else{
            reject('Menor de edad')
        }
    })

    return promesa;
}

var edad = 18

mayorDeEdad(edad)
    .then((respuesta)=>{
        console.log(respuesta);
        return new Promise((resolve, reject) => {
            resolve('Pásale!');
        })
    })
    .then((respuesta)=>{
        console.log(respuesta);
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('fin')
    }) */
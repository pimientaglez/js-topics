function mayorDeEdad(edad) {
    const promesa = new Promise((resolve, reject) => {
        if(edad >= 18){
            resolve(true);
        }else{
            reject(false)
        }
    })

    return promesa;
}

async function determinarSiEntra(){
    var entra = await mayorDeEdad(18);
    if(entra){
        console.log('entra')
    } else {
        console.log('no entra')
    }
}

determinarSiEntra()


/* 
async function sendMessage() {
    const msg = await mayorDeEdad(30);
    console.log(msg)
}


sendMessage()
 */
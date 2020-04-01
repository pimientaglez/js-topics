function getPuppy(url) {
    const promesa = new Promise((resolve, reject) => {
        if(url === 'www.puppy.com'){
            resolve(true);
        }else{
            reject(false)
        }
    })

    return promesa;
}

async function displayPuppy(){
    try{
        const result = await getPuppy('www.puppy2.com');
        console.log(result);
    }catch(error){
        console.error('Errror');
    }
}
displayPuppy();


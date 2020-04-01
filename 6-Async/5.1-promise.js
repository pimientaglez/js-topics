function getRandomPuppies(endpoint) {
    const myPromise = new Promise( (resolve, rejected)=>{
        if(endpoint === 'www.randompuppies.com'){
            setTimeout(()=>{
                resolve('myRandomPuppyImage.jpg');
            }, 2000)
        }else {
            rejected('Error, url incorrect!');
        }
    });
    return myPromise;
}


/* const myRandomPuppyPromise = getRandomPuppies('www.rpies.com');

myRandomPuppyPromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error)
    })
 */


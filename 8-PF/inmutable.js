// primitivos: string, number, boolean, undefined, null, bigInt, Symbol => inmutables
// Objetos, funciones => mutables

//Redux
const obj = { nombre: 'ana', edad: 23 };

function createNewObject(){
    const newObj = {...obj, altura: 10}
    return newObj
}

const result = createNewObject();

console.log(result === obj)



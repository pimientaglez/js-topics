const numeros = ['Hola', 'Ricardo', 'como', 'estas'];

const sumaDelArreglo = numeros.reduce((acc, curr)=>{
    return acc + ' ' +curr ;
})

console.log(sumaDelArreglo)
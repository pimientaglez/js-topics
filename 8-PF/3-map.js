const numeros = [1,2,3,4,5,6,7,8,9,10]; //0-9
const modulo = ['impar', 'par','impar', 'par','impar', 'par','impar', 'par','impar', 'par',]

let numerosPorDos = [];


numerosPorDos = numeros.map((numero)=>{
    return numero * 2;
}); 


let division = [];


division = numeros.map((num)=>{
    return num / 2;
});

console.log(division)








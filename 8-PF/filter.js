const bedu = [
    {
        nombre: 'Anette',
        edad: 18
    },
    {
        nombre: 'Enrique',
        edad: 24
    },
    {
        nombre: 'Jorge',
        edad: 23
    },
    {
        nombre: 'Pablo',
        edad: 29
    },
    {
        nombre: 'Pablo',
        edad: 26
    },
    {
        nombre: 'Ricardo',
        edad: 31
    }
]

let veintiañeros = [];

veintiañeros = bedu.filter((persona)=>{
    if(persona.edad >= 20 && persona.edad <= 29){
        return persona;
    }
})

let pablosArray = [];

pablosArray = bedu.filter((persona)=>{
    if(persona.nombre === 'Pablo'){
        return persona
    }
})

console.log(pablosArray)

let tres = [];

tres = bedu.filter((persona, index)=>{
    if(index < 3){
        return persona;
    }//0,1,2
})

console.log(tres);

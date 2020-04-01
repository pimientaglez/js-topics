const alumnos = [
    {
        nombre: 'Juan',
        apellido: 'Garcia',
        grado: '6',
        escuela: 'Jesus Garcia'
    },
    {
        nombre: 'Pedro',
        apellido: 'Ayon',
        grado: '4',
        escuela: 'Tecnica 3'
    },
    {
        nombre: 'Ana',
        apellido: 'Gonzalez',
        grado: '3',
        escuela: 'Niños Heroes'
    },
    {
        nombre: 'Maria',
        apellido: 'Ayon',
        grado: '3',
        escuela: 'Jesus Garcia'
    },
    {
        nombre: 'Alejandra',
        apellido: 'Medina',
        grado: '3',
        escuela: 'Jesus Garcia'
    },
    {
        nombre: 'Alejandra',
        apellido: 'Chaparro',
        grado: '1',
        escuela: 'Jesus Garcia'
    },
    {
        nombre: 'Joel',
        apellido: 'Garcia',
        grado: '2',
        escuela: 'Niños Heroes'
    },
    {
        nombre: 'Mario',
        apellido: 'Medina',
        grado: '6',
        escuela: 'Tecnica 3'
    },
    {
        nombre: 'Juan',
        apellido: 'Garcia',
        grado: '6',
        escuela: 'Jesus Garcia'
    },
    {
        nombre: 'Juan',
        apellido: 'Garcia',
        grado: '6',
        escuela: 'Jesus Garcia'
    },
    {
        nombre: 'Juan',
        apellido: 'Garcia',
        grado: '6',
        escuela: 'Jesus Garcia'
    },
];

let arr = alumnos.filter((al) =>
    al.apellido === 'Garcia'
);

console.log(arr)
// un arreglos con todos los alumnos que se apellidan Garcia

// un arreglos con todos los alumnos que estudian en la escuela Jesus Garcia

// un arreglos con todos los alumnos que cursen el grado 4 o mas

// un arreglos con todos las alumnas que se llaman alejandras




/* 

const nuevoArreglo = alumnos.map((alumno) => {
    if(parseInt(alumno.grado) === 6){
        alumno.esMayor = true;
    }else{
        alumno.esMayor = false;
    }
    return alumno
})


const nuevosAlumnos = alumnos
    .map((alumno) => {
        if(parseInt(alumno.grado) === 6){
            alumno.esMayor = true;
        }else{
            alumno.esMayor = false;
        }
        return alumno
    }).filter((alumno)=>{
        if(alumno.apellido === 'Medina'){
            return alumno;
        }
    }).filter((alumno) => {
        if(alumno.esMayor){
            return alumno;
        }
})

console.log(nuevosAlumnos); */




















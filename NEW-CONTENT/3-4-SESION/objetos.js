var empleado = {
    nombre: 'Maria',
    apellido: 'Mora',
    posicion: 'Programadora',
    sueldo: 20000,
    experiencia: '2 años',
    esActivo: true,
    telefono: {
        celular: '33-13-44-23-21',
        casa: '33-23-23-23-23',
    },
    ubicacion: {
        ciudad: 'Guadalajara',
        estado: 'Jalisco',
        cp : 34090
    },
    languages: [
        'javascript', 'ruby', 'python', 'GO'
    ],
    empresasAnteriores: [
        {
            empresa: 'hp',
            añosLaborados: .5
        },
        {
            empresa: 'ibm',
            añosLaborados: 1
        },
        {
            empresa: 'continental',
            añosLaborados: 1.5
        },
        {
            empresa: 'oracle',
            añosLaborados: 2,
        },
        {
            empresa: 'wizeline',
            añosLaborados: .3
        },
        {
            empresa: 'epam',
            añosLaborados: 5
        },
        {
            empresa: 'tiempo development',
            añosLaborados: 1
        },
    ],
    segundoNombre: null,
    calcularSalarioDiario: function (){
        console.log('Mi salario diario es de ' + this.sueldo / 30);
    },
    miFuncion: function() {
        console.log('esta es mi funcion')
    },
    nombreCompleto: function () {
        if (this.segundoNombre !== null) {
            return this.nombre + ' ' + this.segundoNombre + ' ' + this.apellido
        } else {
            return this.nombre + ' ' + this.apellido
        }
    },
    languagesLearned: function () {
        for(var i = 0; i < this.languages.length; i++) {
            console.log(this.nombre+' ha programado en: '+ this.languages[i])
        }
    },
    imprimirEmpresasAnteriores: function(){
        console.log(this.nombreCompleto())
        for(var i = 0; i < this.empresasAnteriores.length; i++) {
            console.log(' ha trabajado '+ this.empresasAnteriores[i].añosLaborados+ ' años en ' + this.empresasAnteriores[i].empresa)
        }
    }
}
//empleado.imprimirEmpresasAnteriores()

/* console.log(empleado['nombre'])
console.log(empleado['skill'])
console.log(empleado['experiencia'])
console.log(empleado['esActivo'])


console.log(empleado.experiencia)
console.log(empleado.esActivo)

empleado.ubicacion.ciudad = 'Zapopan'
empleado.ubicacion.cp = '44040'
console.log(empleado.ubicacion.estado)
console.log(empleado.ubicacion.ciudad)

console.log(empleado.telefono.celular)
console.log(empleado['telefono']['celular'])

empleado.apellido = 'Mora'
empleado['estadoCivil'] = 'soltera'; */
//console.log(empleado) 

/* var persona = {
    nombre : 'Martin',
    edad : 25,
    saludo: function () {
        console.log(this.nombre + ' dice hola' );
    },
    edadDePersona: function () {
        console.log(this.nombre +' tiene ' + this.edad + ' años')
    }
}

persona.saludo();//

function saludo(){
    console.log(this)
}

saludo();// */

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function enlistarDatos(arreglo, propiedad) {
    
}

enlistarDatos(singers, 'name') 
//['Steven Tyler', 'Karen Carpenter', 'Kurt Cobain', 'Chris Cornell']


















































/* 
    Axel - Dark - Netflix - Thriller - Ciencia Ficcion - Serie
    Nalleli - What we do in the shadows - FX - Comedia - Vampiros - Serie
    Martin - The hounting of bly manor - Netflix - Terror - Serie
    Alejandra - Akame GA Kill - Netflix -  Anime - Epico - Serie
    Raul - Armapedia - Yotube - Documental - Serie
    Yasser - The Boys - Prime Video - Accion/ Comedia Negra - Serie
    Uriel - La Mujer en la ventana - Netflix - Suspenso - Pelicula
*/
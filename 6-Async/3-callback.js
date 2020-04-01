//examples
boton.addEventListener('click', function(){
    obtenerAlumnos('www.alumnos.com', function(alumnos){
        alumnos.forEach(alumno => {
            if(alumno.id = 1){
                modificaAlumno('www.alunos.com/modifica/1', function(resultado){
                    if(resultado==='success'){
                        console.log('alumno modificado!');
                    }
                })
            }
        });
    })
})
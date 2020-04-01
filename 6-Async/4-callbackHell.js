//actualizar alumno

boton.addEventListener('click', ()=>{
    obtenerAlumnos((alumnos)=>{
        alumnos.forEach(alumno => {
            if(alumno.id === 1){
                alumno.graduado = true;
                actualizarAlumno(alumno, (resultado)=>{
                    if(resultado.success){
                        console.log('Alumno actualizado exitosamente')
                    }
                })
            }
        });
    })
});
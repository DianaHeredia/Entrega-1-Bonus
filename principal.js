const {cursos, imprimirDatos} = require ('./datos');
const {argv, opciones} = require('./inscripcion')
const fs = require('fs');
const express = require('express')
const app = express()

if(argv.id == null){
    console.log(imprimirDatos());
}else{
    let argumentos = cursos.find(argumentos => argumentos.id == argv.id);
    var infoCurso;
    let cursoElegido = (idE) => {
        if(argumentos){
            for(i=0; i<=2; i++){
                if(cursos[i].id == idE){
                    (function(ind){
                        infoCurso = 'Curso ' + cursos[ind].id + ': ' + cursos[ind].nombre + ', tiene una duración de ' + cursos[ind].duracion + ' horas, y un precio de $' + cursos[ind].precio;
                    }) (i);
                }
            }
        }
    }
    cursoElegido(argv.id);

    if (argv.id>3 || argv.id<1) {
        (console.log('El ID seleccionado no corresponde a ningún curso, favor seleccionar otro: \n' + imprimirDatos()));
    }else{
        app.get('/', function (req, res) {
            res.send('NUEVO ESTUDIANTE <br> Nombre: ' + argv.nombre + '<br> Cédula: ' + argv.cedula + 
            '<br> El estudiante se matriculó en el ' + infoCurso)
          })
           
        app.listen(3000)
        console.log('Se ha creado el archivo');
    }

    
    /*let crearArchivo = (estudiante) =>{
        texto= 'NUEVO ESTUDIANTE \n Nombre: ' + argv.nombre + '\n Cédula: ' + argv.cedula + 
                '\n El estudiante se matriculó en el ' + infoCurso;
        fs.writeFile('matricula.txt', texto, (err) =>{
            if (argv.id>3 || argv.id<1) {
                (console.log('El ID seleccionado no corresponde a ningún curso, favor seleccionar otro: \n' + imprimirDatos()));
            }else{
                console.log('Se ha creado el archivo');
            }
        
        })
    }

    crearArchivo(argv);*/
}
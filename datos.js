let cursos = [{
    nombre: 'Node.JS',
    id: 1,
    duracion: 90,
    precio: 50000
},
{
    nombre: 'Lógica',
    id: 2,
    duracion: 120,
    precio: 100000
},
{
    nombre: 'Matemáticas',
    id: 3,
    duracion: 100,
    precio: 75000
}];

let imprimirDatos = () => {
    for(i=0; i<=2; i++){
        (function(ind){
            setTimeout(function(){
                console.log('Curso ' + cursos[ind].id + ': ' + cursos[ind].nombre + ', tiene una duración de ' + cursos[ind].duracion + ' horas, y un precio de $' + cursos[ind].precio);
            }, 2000 * (ind + 1));
        }) (i);
    }
}

module.exports = {
    cursos,
    imprimirDatos
};
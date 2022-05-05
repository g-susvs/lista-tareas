

import crearElemento from "./functions/crear-elemento.js";
const d =document
var guardado;
let $formTask = d.querySelector("#form-task");


(function(){
    guardado = JSON.parse(localStorage.getItem('tareas'));

    if (guardado != null) {     
        crearElemento(guardado,$formTask,'check')
    }
    else {
        guardado = [];
    }
    

    d.addEventListener('click', (e) => {
        // console.clear();
        // console.log(e.target.name);

        guardado.forEach( t => {
            if( t.desc == e.target.name ){
                t.estado = e.target.checked;
                localStorage.setItem('tareas', JSON.stringify(guardado));
            }
        });
    })

  

}())



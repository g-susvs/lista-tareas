import crearElemento from "./functions/crear-elemento.js";
const d =document
var guardado;
let $contentTask = d.querySelector(".content-task");

(function(){
    guardado = JSON.parse(localStorage.getItem('tareas'));

    if (guardado != null) {
        
        crearElemento(guardado,$contentTask,true)
    }
    else {
        guardado = [];
    }
}())
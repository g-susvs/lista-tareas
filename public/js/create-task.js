import crearElemento from './functions/crear-elemento.js';
import Tarea from './models/tarea.js';
const d = document;
var guardado;
let $contentTask = d.querySelector(".content-task");
    let $btnAddTask = d.querySelector("#add-task");
    let task = d.querySelector('#task');
let $btnDeleteInput = d.querySelector('#delete-inputValue');

  
(function () {
    // Variables
    
    // Recibimos lo que tenemos guardado el LocalStorage

    guardado = JSON.parse(localStorage.getItem('tareas'));
    // Verificamos si guardado es diferente de null entonces
    // realizamos un ciclo for para agregar las tareas
    if (guardado != null) {
        
        crearElemento(guardado,$contentTask,'crear')
    }
    // En caso de que sea null la declaramos como un arreglo
    else {
        guardado = [];
    }
    function agregarTarea(tarea) {
        let $divTask = d.createElement('div');
        $divTask.classList.add("task");
        $contentTask.appendChild($divTask).innerHTML=tarea;
    }
    
    $btnAddTask.addEventListener('click', () => {
        if (task.value != '') {
            
            const tarea = new Tarea(task.value);
            guardado.push(tarea);
            
            agregarTarea(task.value);
            localStorage.setItem('tareas', JSON.stringify(guardado));
            
        }


    })

    $btnDeleteInput.addEventListener('click', ()=>{
        return task.value ="";
    } );

}())








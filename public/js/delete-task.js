


import crearElemento from './functions/crear-elemento.js';

const d = document;
var guardado;
let $contentTask = d.querySelector(".content-task");


( function () {
    // Variables

    // Recibimos lo que tenemos guardado el LocalStorage

    guardado = JSON.parse(localStorage.getItem('tareas'));

    if (guardado != null) {

    
        guardado.forEach( t => {
            let $divTask = d.createElement('div');
            $divTask.classList.add("task");
            
            $divTask.setAttribute('data-name',t.desc);
            let $p = d.createElement('p');
            let $btn = d.createElement('button');
            
            $btn.onclick = showAlert
            $btn.classList.add('btn');
            $p.textContent = t.desc;
            $btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
          </svg>`;
            $divTask.appendChild($p);
            $divTask.appendChild($btn);

            $contentTask.appendChild($divTask);
        })
    }
    else {
        guardado = [];
    }
    
    function showAlert(e){

        const tareaDiv = e.target.parentNode.parentNode;
        const tarea = tareaDiv.getAttribute('data-name');
        let idxDelete = Number;
    
        guardado.forEach( (t,i) => {
            if(t.desc == tarea){
                return idxDelete = i
            }
        })

        guardado.splice(idxDelete,1);
        $contentTask.removeChild(tareaDiv); 
        localStorage.setItem('tareas', JSON.stringify(guardado));

    }


  

    
}());

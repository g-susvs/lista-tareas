var guardado;
(function () {
    // Variables
    let lista         = document.getElementById("lista");
    let tareaInput    = document.getElementById("tareaInput");
    let btnNuevaTarea = document.getElementById("btn-agregar");
    // Recibimos lo que tenemos guardado el LocalStorage
    guardado          = JSON.parse(localStorage.getItem('datos'));

    // Verificamos si guardado es diferente de null entonces
    // realizamos un ciclo for para agregar las tareas
    if (guardado != null) {
        for (i in guardado) {
            agregarTarea(guardado[i]);
        }
    }
    // En caso de que sea null la declaramos como un arreglo
    else {
        guardado = [];
    }

    // La funcion recibe el texto
    function agregarTarea(tarea)
    {
        let nuevaTarea = document.createElement("li");
        let enlace     = document.createElement("a");
        let contenido  = document.createTextNode(tarea);

        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Le agregamos el evento onclick haciendo referencia a la funcion
        // eliminarTarea mandando como parametro el evento
        enlace.setAttribute("onclick", "eliminarTarea(this)");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
    };

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", function () {
        // Verificamos que la tarea a ingresar no sea vacia
        if (tareaInput.value != '') {
            agregarTarea(tareaInput.value);
            guardado.push(tareaInput.value);
            localStorage.setItem('datos', JSON.stringify(guardado));
            tareaInput.value = "";
        }
        // Si es vacía le agregamos el placeholder de invalida
        else {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
        }
    });
}());

// Recibe como parámetro el evento
function eliminarTarea(link)
{
    // Verificamos el parentNode sea diferente de null
    if (link.parentNode !== null) {
        // Eliminamos la tarea clickeada
        link.parentNode.parentNode.removeChild(link.parentNode);
    }
    // Verificamos si el texto existe en el arreglo general
    let index = guardado.indexOf(link.text);
    // Si existe lo eliminamos
    if (index !== -1) guardado.splice(index, 1);
    // Guardamos el arreglo en localstorage
    localStorage.setItem('datos', JSON.stringify(guardado));
}
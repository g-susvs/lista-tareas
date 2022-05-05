const d = document;
export default function crearElemento(arr = [], contenedor, tipo = "crear") {
    arr.forEach(t => {
        let $divTask = d.createElement('div');
        $divTask.classList.add("task");
        
        if (tipo == 'crear') {
            contenedor.appendChild($divTask).innerHTML = t.desc;
        }
        if (tipo == true) {
            if (t.estado == true) {
                let p = d.createElement('p');
                p.textContent=t.desc;
                let b = d.createElement('b');
                b.textContent='Completado';
                $divTask.appendChild(p);
                $divTask.appendChild(b);
                contenedor.appendChild($divTask)

            }

        }
        if (tipo == false) {
            if (t.estado == false) {
                let p = d.createElement('p');
                p.textContent=t.desc;
                let b = d.createElement('b');
                b.textContent='Pendiente';
                $divTask.appendChild(p);
                $divTask.appendChild(b);
                contenedor.appendChild($divTask)
            }


        }
        if(tipo == 'check'){
            let $label = d.createElement('label');
            $label.textContent = t.desc;

            let $input = d.createElement('input');

            $input.type = 'checkbox'
            $input.name=t.desc;
            $input.checked = t.estado;

            $divTask.appendChild($input);
            $divTask.appendChild($label)

            contenedor.appendChild($divTask)
            
        }
        

    })

}


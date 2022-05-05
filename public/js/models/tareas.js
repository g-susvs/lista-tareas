import Tarea from "./tarea.js";


export default class Tareas{

    get listadoArr () {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea =this._listado[key];
            listado.push(tarea)});

        return listado;

        }
        

    constructor () {
        this._listado = {};
    }
    
    cargarTareasFromArr (tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea] = tarea;
        })
       
    }

    crearTarea ( desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.desc] = tarea;
    }
    
    
    listarTareas () {
        console.log();
        this.listadoArr.forEach((tarea,i) => {
            
            const idx = `${i + 1}`;
            if(tarea.completadoEn != null){
                console.log(`${idx}. ${tarea.desc} :: ${'completado'}`);
            }else{
                console.log(`${idx}. ${tarea.desc} :: ${'pendiente'}`);
            }
        })
    }
}
class CreateTask extends HTMLElement{
    constructor(){
        super()
        this.taskinput()
    }

    taskinput(){
        this.innerHTML = `
        <base href>
            <div>
                <form class="crear-tarea">
                    <div class="input-group mb-3" id="input">
                    <input type="text" class="form-control" id= "blank-space" placeholder="Escribe el nombre de tu tarea" aria-label="Escribe el nombre de tu tarea" aria-describedby="boton">
                    <button type="button" class="btn btn-second" id="boton-crear">Agregar Tarea</button>
                
                    </div>
                </form>
            </div>
            

        `;
    }
}

customElements.define('create-task', CreateTask);
export default CreateTask;


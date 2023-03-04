import "./INPUT/createTask.js"
import "./TASK/newTask.js"



const button = document.getElementById("boton-crear")
const list = document.getElementById("Task-list")

button.addEventListener("click", (e)=>{
    addTask(e)
})


function addTask(e){
    e.preventDefault()
    const input = document.getElementById("blank-space")
    const listOfTasks = document.createElement("task-space")
    listOfTasks.setAttribute('newTask', input.value);
    console.log(listOfTasks)
    list.append(listOfTasks)
    input.value = ""

console.log(list
    );
    
}
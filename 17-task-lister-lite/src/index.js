

const main = document.querySelector("#main-content")
console.log(main)


const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  // have the user input
  const newTask = document.querySelector("#new-task-description").value
  // slap it on the document
  // where
  taskList.innerHTML += `
      <li> ${newTask}
        <button data-action="delete" data-matt="PLWERFUL" data-charlie="downfield"> X for delete</button>
        <button data-action="edit"> EDIT THAT TASK! </button>
      </li>

    `
  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask
  // taskList.appendChild(taskItem)
  taskForm.reset()
})

taskList.addEventListener("click", function(e) {
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})



// dataset

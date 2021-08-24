const newTask = document.getElementById("new-task")
const taskInput = document.getElementById("task-input")
const deleteBtn = document.getElementById("delete-btn")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("toDoList")


const makeListItem = (text, done, id) => {
const listItem = document.createElement("li")
const listLabel = document.createElement("label")
const div = document.createElement("div")
const button = document.createElement("button")
button.classList.add("icon")
listLabel.htmlFor = id
const listBox = document.createElement("input")
listBox.type = "checkbox"
listBox.name = "task"
listBox.id = id
listBox.checked = done
listLabel.innerText = text
div.appendChild(listBox)
div.appendChild(listLabel)
button.classList.add(id)
listItem.appendChild(div)
listItem.appendChild(button)
listItem.classList.add("list-item")
list.appendChild(listItem)


document.addEventListener("click", (e) => {
    if (e.target && e.target.classList[1]== id) {
        deleteData(id)
        list.innerHTML = ""
        printToDom()
    }
})

document.addEventListener("change", (e) => {
    if (e.target && e.target.id == id)
    {
        if(e.target.checked) {
            getDataId(id).then(data => {
                putData({description: data.object.description, done: true},id)

})
        } else {
            getDataId(id).then(data => {
                putData({description: data.object.description, done: false},id)

})
        }
    }
} )
}

const printToDom = () => {
    getData().then(data => {
        data.forEach(element => {
            makeListItem(element.object.description, element.object.done, element._id)
        });
    })
}

printToDom()

newTask.addEventListener("submit", (e)=> {
    list.innerHTML = ""
    e.preventDefault()
    postData({description: taskInput.value, done: false})
    taskInput.value = ""
    printToDom()
})

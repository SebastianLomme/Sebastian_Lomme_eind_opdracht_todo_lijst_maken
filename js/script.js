const newTask = document.getElementById("new-task")
const taskInput = document.getElementById("task-input")
const deleteBtn = document.getElementById("delete-btn")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("toDoList")


const makeListItem = (text, done, id) => {
const listItem = document.createElement("li")
const listLabel = document.createElement("input")
const div = document.createElement("div")
const button = document.createElement("button")
button.classList.add("icon")
listLabel.htmlFor = id
const listBox = document.createElement("input")
listBox.type = "checkbox"
listBox.name = "task"
listBox.id = id
listBox.checked = done
listLabel.value = text
div.appendChild(listBox)
div.appendChild(listLabel)
button.classList.add(id)
listItem.appendChild(div)
listItem.appendChild(button)
listItem.classList.add("list-item")
list.appendChild(listItem)
const isChecked = done

if(isChecked) {
    listLabel.classList.add("checked")
} else {
    listLabel.classList.remove("checked")
}

listLabel.addEventListener("change", () => {

        putData({description: listLabel.value, done:isChecked },id)
    })


button.addEventListener("click", (e) => {
    deleteDom(id)
})

listBox.addEventListener("change", (e) => {
        if(e.target.checked) {
            getDataId(id).then(data => {
                putData({description: data.object.description, done: true},id)
                listLabel.classList.add("checked")

})
        } else {
            getDataId(id).then(data => {
                putData({description: data.object.description, done: false},id)
                listLabel.classList.remove("checked")
})
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
    addDom(e)
})

const addDom = async (e) => {
    e.preventDefault()
    list.innerHTML = ""
    await postData({description: taskInput.value, done: false})
    taskInput.value = ""
    printToDom()
}

const deleteDom = async (id) => {
    console.log("click")
    list.innerHTML = ""
    await deleteData(id)
    printToDom()
}
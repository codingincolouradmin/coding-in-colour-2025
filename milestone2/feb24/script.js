let selectedDiv = document.querySelector(".select");
let selectImg = document.querySelectorAll("img")
let selectBtn = document.querySelector("#btn")
let selectSection = document.querySelector("section")

console.log(selectedDiv)
selectedDiv.innerHTML = "<h1>HEllow everyone</h1>";

selectedDiv.style.color = "blue"


// selectedDiv.classList.remove("style")


// function buttonClicked() {
//     selectImg[1].src = " https://placehold.co/600x400/000000/FFF"

// }

// 4 steps: select, listen, event, callback
// selectBtn.addEventListener("click", buttonClicked)


// attach listener to an html element. Define an event and a callback function.
// Once the event is triggered, the callback function is called. 
selectBtn.addEventListener("click", () => {
    // selectedDiv.classList.remove("style")
    // selectedDiv.parentElement.remove();
    selectedDiv.nextElementSibling.src = "https://placehold.co/600x400";

    [...selectSection.children].forEach(element => {
        element.classList.add("style")
    });

})

// TO Do List JavaScript code..


const taskInput = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-task")
const taskList = document.getElementById("task-list")

function addTask() {
    const text = taskInput.value;

    if (text === "") {
        alert("please enter a task!")
        return;
    }

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "X"
    removeBtn.classList.add("removeBtn")


    const li = document.createElement("li")
    li.textContent = text

    taskList.appendChild(li);
    li.appendChild(removeBtn)
    // removeBtn.addEventListener("click", () => { li.remove() })
    taskInput.value = ""

}

function removeTask(event) {
    if (event.target.classList.contains("removeBtn")) {
        event.target.parentElement.remove()
    }
}

addTaskBtn.addEventListener("click", addTask)
taskList.addEventListener("click", removeTask)
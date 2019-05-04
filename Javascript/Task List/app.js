//Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
//load all event listeners
loadEventListeners();
//create event loader function
function loadEventListeners(){
    //add task event
    form.addEventListener("submit", addTask);

    //Store task in local storage
    document.addEventListener("DOMContentLoaded", getTasksForDOM);

    //Remove task form list
    taskList.addEventListener("click", removeTask);

    //Clear all tasks
    clearButton.addEventListener("click", clearAllTasks);

    //Filter through tasks
    filter.addEventListener("keyup", filterTasks)
}
 //add task function

 function addTask(e){
if(taskInput.value === ""){
alert("Please add a task");
}
else if(!taskInput.value.replace(/\s/g, '').length){
    alert("Please add a task that contains letters");
}
else{
    //create list element
    const li = document.createElement("li");
    //create list class
    li.className = "collection-item"
    //create text node and append to list element
    li.appendChild(document.createTextNode(taskInput.value));
    //Create a link element
    const link = document.createElement("a");
    //add class
    link.className = "delete-item secondary-content";

    //add icon html
    link.innerHTML = "<li class='fa fa-remove' style='cursor:pointer'></li>";

    //append link to list
    li.appendChild(link);

    //append list to unordered list with query selector class collection
    taskList.appendChild(li);

    //Store in local storage
    storeTaskInLocalStorage(taskInput.value);
    //Clear task input
    taskInput.value = "";
}
e.preventDefault();
 }

 //create storTaskInLocalStorage function
 function storeTaskInLocalStorage(task){
     let tasks;
     if(localStorage.getItem("tasks") === null){
         tasks = [];
     }
     else{
         tasks = JSON.parse(localStorage.getItem("tasks"));
     }
     tasks.push(task);
     localStorage.setItem("tasks", JSON.stringify(tasks));
 }

 //create getTasksForDOM function
function getTasksForDOM(){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
        const li = document.createElement("li");
    //create list class
    li.className = "collection-item"
    //create text node and append to list element
    li.appendChild(document.createTextNode(task));
    //Create a link element
    const link = document.createElement("a");
    //add class
    link.className = "delete-item secondary-content";

    //add icon html
    link.innerHTML = "<li class='fa fa-remove' style='cursor:pointer'></li>";

    //append link to list
    li.appendChild(link);

    //append list to unordered list with query selector class collection
    taskList.appendChild(li);
    });
}

 //Create removeTask function
 function removeTask(e){
     if (e.target.parentElement.classList.contains("delete-item")){
         if(confirm("delete task?")){
             e.target.parentElement.parentElement.remove();

             //remove from Localstorage
             removeFromLocatStorage(e.target.parentElement.parentElement);
         }
     }
 }

 //create removeFromLocalStorage function
function removeFromLocatStorage(taskItem){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

 //create clearAllTasks fuction
function clearAllTasks(){
    if(confirm("Clear all tasks?")){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);

            //Clear tasks from local storage
            clearLocalStorage();
        }
    }
}

//create function clearLocalStorage
function clearLocalStorage(){
    localStorage.clear();
}

//create function to filter tasks
function filterTasks(e){
    const typedText = e.target.value.toUpperCase();
    
    document.querySelectorAll(".collection-item").forEach(function(task){
        const listItem = task.firstChild.textContent;
        if(listItem.toUpperCase().indexOf(typedText) != -1){
            task.style.display = "block";
        }
        else{
            task.style.display = "none";
        }
    });
}

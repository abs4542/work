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
}
 //add task function

 function addTask(e){
if(taskInput.value === ""){
alert("Please add a task");
}
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
 link.innerHTML = "<li class='fa fa-remove'></li>";

 //append link to list
 li.appendChild(link);

 //append list to unordered list with query selector class collection
 taskList.appendChild(li);

 //Clear all tasks
 taskInput.value = "";

 e.preventDefault();
 }
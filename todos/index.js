/* Instructions
You have been provided the necessary variable declarations as well as an array of todo items.

Your goal is to create a function that will render our todos into a list in the browser.

Initially set the text content of the todoList to an empty string.

todoCountSpan should show the total count of todos on the page.

Inside of your render function you will also need a for loop.

It should loop over the todos array creating an li element for each index of the array.

It should set the content of the created li element to the value of the current array index.

Finally the new li should be appended to the ul provided.
*/

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");

function renderToDos() {
  todos.forEach(function(todo) {
    let listItem = document.createElement("li");
    listItem.innerHTML = todo;
    todoList.appendChild(listItem);
  });
  //for (let todo of todos){
  //let listItem = document.createElement('li');
  //todoItem.innerHTML = addTodo
  //todoList.appendChild(listItem);
  //}
}

renderToDos();

document.addEventListener("submit", function() {
  event.preventDefault();
  let userInput = todoInput.value;
  //add userInput to todos array
  todos.push(userInput);
  todoList.innerHTML = " ";
  renderToDos();
});

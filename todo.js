"use strict";

//set up retrieval from local storage
function retrieve() {
  var todoStorage = [];
  var stored = localStorage.getItem('storageKey');

  //retrieve if anything is stored
  if(stored !== null) {
    todoStorage = JSON.parse(stored);
  }
  return todoStorage;
}

function addTodoItem() {
  console.log('working');
  //grab entry from input
  var inputItem = document.getElementById("inputItem").value;

  //access localStorage using retrieve function
  var todoStorageAdd = retrieve();

  //append new items to storage
  todoStorageAdd.push(inputItem);

  localStorage.setItem('todoStorageAdd', JSON.stringify(todoStorageAdd));


}

//attach addTodoItem to click event
document.getElementById("create").addEventListener("click", addTodoItem)
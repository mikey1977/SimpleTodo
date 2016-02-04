"use strict";

//set up retrieval from local storage
function retrieve() {
  var todos = [];
  var stored = localStorage.getItem('todo');

  //retrieve if anything is stored
  if(stored !== null) {
    todos = JSON.parse(stored);
  }
  return todos;
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

  printItems();
}

//attach addTodoItem to click event
document.getElementById("create").addEventListener("click", addTodoItem)


function printItems() {
  var printedItems = retrieve();

  var concatString = '<div>';
  for (var i = 0; i < printedItems.length; i++){

    //add html elements to reveal todo items, and attach delete button specifying id of each todo
    concatString +='<div class="todoRow"><p class="todoItems">' + printedItems[i] + '</p><button class="delete warning" id="' + i + '">delete</button></div></div>';

    //print to 'printOut' id
    document.getElementById('printOut').innerHTML = concatString;
  }
}


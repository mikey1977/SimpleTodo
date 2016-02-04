'use strict';

//set up retrieval from local storage
function retrieve() {
  var todos = [];
  var stored = localStorage.getItem('todoKey');

  //retrieve if anything is stored
  if (stored !== null) {
    todos = JSON.parse(stored);
  }
  return todos;
}

function addTodoItem() {

  //grab entry from input
  var inputItemValue = document.getElementById('inputItem').value;

  //access localStorage using retrieve function
  var todoStorageAdd = retrieve();

  //append new items to storage
  todoStorageAdd.push(inputItemValue);

  localStorage.setItem('todoKey', JSON.stringify(todoStorageAdd));

  printItems();
}

function printItems() {
  var printedItems = retrieve();

  var concatString = '<div>';
  for (var i = 0; i < printedItems.length; i++){

    //add html elements to reveal todo items, and attach delete button specifying id of each todo
    concatString += '<div class="todoRow"><p class="todoItems">' + printedItems[i] + '</p><button class="delete warning" id="' + i + '">delete</button></div></div>';
  }

  //print to 'printOut' id
  document.getElementById('printOut').innerHTML = concatString;

  //attach delete to click event
  var deleteEachTodo = document.getElementsByClassName('delete');
  for (var j = 0; j < deleteEachTodo.length; j++) {
    deleteEachTodo[j].addEventListener('click', deleteTodo);
  }
}

//create delete function
function deleteTodo() {
  var targetById = this.getAttribute('id');
  var deleteItem = retrieve();
  deleteItem.splice(targetById, 1);
  localStorage.setItem('todoKey', JSON.stringify(deleteItem));

  printItems();

  return false;
}

//clear input fields after entering
function clear() {
  document.getElementById('inputItem').value = '';
}

function runScript(e) {
  if (e.keyCode == 13) {
    addTodoItem();
    clear();
  }
}
//attach addTodoItem to click event
document.getElementById('create').addEventListener('click', addTodoItem);
document.getElementById('create').addEventListener('click', clear);
document.getElementById('inputItem').addEventListener('click', clear);

printItems();
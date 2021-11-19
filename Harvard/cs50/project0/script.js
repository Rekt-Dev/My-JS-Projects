const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todolistlocation')
let itemCountSpan = document.getElementById('item-count')
let uncheckedCountSpan = document.getElementById('unchecked-count')
let para = document.getElementById('para')
let button = document.getElementById('button center')







let toDoCounter=1
let uncheckedCounter=1
let array=[]
function newTodo() {
  addElement()
array.push(addElement)
console.log(`this is the to do list in array format --> ${array}`)
  itemCountSpan.innerHTML=toDoCounter
  uncheckedCounter = toDoCounter

  uncheckedCountSpan.innerHTML=uncheckedCounter


  toDoCounter ++
  uncheckedCounter = toDoCounter
  console.log(`this is todocounter${toDoCounter}`)
  console.log(`this is uncheckedcounter${uncheckedCounter}`)

  return toDoCounter
 

}


let toDoCounterResult= newTodo()
//button.onclick=
//let userInput = window. prompt("Please enter your todo item: "); 
function addElement () {
  let userInput = window. prompt("Please enter your todo item: "); 
  let newLi = document.createElement("li");

  // and give it some content
  let newContent = document.createTextNode(userInput);
  // add the text node to the newly created div
  newLi.appendChild(newContent);
  let ulId = document.getElementById("todo-list") 

  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("ulId");
  document.body.insertBefore(newLi, currentDiv);

return userInput
}
/*



*/
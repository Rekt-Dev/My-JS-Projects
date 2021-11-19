const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todo-list')
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
  itemCountSpan.innerHTML=toDoCounter
  uncheckedCounter = toDoCounter

  uncheckedCountSpan.innerHTML=uncheckedCounter


  toDoCounter ++
  uncheckedCounter = toDoCounter
  console.log(`this is todocounter${toDoCounter}`)
  console.log(`this is uncheckedcounter${uncheckedCounter}`)
  console.log(`this is the to do list in array format --> ${array}`)


  return toDoCounter
 

}


let toDoCounterResult= newTodo()
let geekFunc = geek()
console.log(geekFunc)
//button.onclick=
//let userInput = window. prompt("Please enter your todo item: "); 
function addElement () {
  let userInput = window. prompt("Please enter your todo item: "); 
  let newLi = document.createElement("li");

  // and give it some content
  let newContent = document.createTextNode(userInput);
  // add the text node to the newly created div
  newLi.appendChild(newContent);
  
 // let ulId = document.getElementById("ulId") 

  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("ulId");
  document.body.insertBefore(newLi, currentDiv);

return userInput
}


  function geek() {
            var myDiv = document.getElementById("myDiv");
             
            // creating checkbox element
            var checkbox = document.createElement('input');
             
            // Assigning the attributes
            // to created checkbox
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";
             
            // creating label for checkbox
            var label = document.createElement('label');
             
            // assigning attributes for
            // the created label tag
            label.htmlFor = "id";
             
            // appending the created text to
            // the created label tag
            label.appendChild(document.createTextNode('This is the label for checkbox.'));
             
            // appending the checkbox
            // and label to div
            myDiv.appendChild(checkbox);
            myDiv.appendChild(label);
        }

geek()
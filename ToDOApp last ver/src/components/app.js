import React, { useState } from "react";
import ToDoItem from "./ToDoItem";



function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);


  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }


  function deleteItem(){
console.log("u have been deleted")
setItems((prevItems) => {

}
)
  }


  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items&&items.map((todoItem, index) => (
          <ToDoItem 
            key={index}
             id={index} 
             text={todoItem} 
             onChecked={deleteItem}
            />

          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

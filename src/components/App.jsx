import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [listArray, setListArray] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    setInputText(newVal);
  }

  function handleClick() {
    const newLI = {
      key: listArray.length,
      content: inputText
    };
    setListArray((current) => {
      return [...current, newLI];
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

        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {listArray.map((arrayItem) => {
            console.log(listArray);
            return (
              <ListItem
                key={arrayItem.key}
                content={arrayItem.content}
                name="listitem"
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

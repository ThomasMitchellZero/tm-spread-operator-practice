import React, { useState } from "react";
import ListItem from "./ListItem";
//import InputField from "./InputField";

function App() {
  const [listState, modifyState] = useState({
    arrayList: [
      { key: 0, content: "juice" },
      { key: 1, content: "spinach" }
    ],
    inputText: ""
  });

  function handleChange(event) {
    event.persist();

    const value = event.target.value;

    modifyState((currentState) => {
      //console.log(currentState);
      return {
        ...currentState,
        inputText: value
      };
    });
  }

  function handleClick() {
    modifyState((currentState) => {
      const newLI = {
        key: currentState.arrayList.length,
        content: currentState.inputText
      };

      return {
        arrayList: [...currentState.arrayList, newLI],
        inputText: ""
      };
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={listState.inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {listState.arrayList.map((arrayItem) => {
            return <ListItem key={arrayItem.key} content={arrayItem.content} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

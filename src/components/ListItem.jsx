import React, { useState } from "react";

function ListItem(props) {
  const [statusClass, changeStatus] = useState("active");

  function handleClick(event) {
    let status = event.target.className;
    console.log(status);
    if (status === "active") {
      changeStatus("inactive");
    } else {
      changeStatus("active");
    }
  }

  return (
    <div onClick={handleClick}>
      <li className={statusClass}>{props.content}</li>
    </div>
  );
}

export default ListItem;

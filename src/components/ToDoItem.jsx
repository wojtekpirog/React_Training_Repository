import { useState } from "react";

export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleIsDone() {
    setIsDone(!isDone);
  }

  return (
    <li id={props.id} onClick={handleIsDone} onDoubleClick={() => props.onDoubleClick(props.id)} style={{textDecoration: isDone ? "line-through" : "none"}}>{props.name}</li>
  );
}
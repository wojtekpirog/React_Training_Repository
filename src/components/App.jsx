import { useState } from "react";
import PageHeading from "./PageHeading";
import Input from "./Input";
import Button from "./Button";
import ListHeading from "./ListHeading";
import Paragraph from "./Paragraph";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [error, setError] = useState("No tasks on the list");
  const [tasksArray, setTasksArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue !== "") {
      setTasksArray(prevTasks => [...prevTasks, {id: tasksArray.length + 1, name: inputValue}]);
      setError("");
      setInputValue("");
    } else {
      setError("Your task must have a name");
    }    
  }

  function setTaskName(e) {
    setInputValue(e.target.value);
  }

  function deleteItem(id) {
    // setTasksArray(prevTasks => );
    setTasksArray(prevTasksArray => prevTasksArray.filter((task, index) => index !== id));
    console.log("Delete item with id: " + id + "!");
  }

  return (
    <div className="container">
      <div className="header">
        <PageHeading />
        <Input className="todo-input" placeholder="Enter task's name" value={inputValue} onChange={setTaskName} />
        <Button className="add-btn" text="Add" onClickFunction={addTask} />
      </div>
      <div className="todo-list">
        <ListHeading />
        <Paragraph className="error-info" errorMessage={error} />
        <ul>
          {tasksArray.map((task, index) => <ToDoItem key={index} id={index} name={task.name} onDoubleClick={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}
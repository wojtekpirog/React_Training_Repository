import { useState } from "react";
import PageHeading from "./PageHeading";
import Input from "./Input";
import Button from "./Button";
import ListHeading from "./ListHeading";
import Paragraph from "./Paragraph";
import TaskList from "./TaskList";

export default function App() {
  const [tasksArray, setTasksArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    setTasksArray([...tasksArray, {id: tasksArray.length + 1, name: inputValue}]);
  }

  function setTaskName(e) {
    setInputValue(e.target.value);
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
        <Paragraph className="error-info" errorMessage={tasksArray.length === 0 && "No tasks on the list"} />
        <TaskList tasksArray={tasksArray} />
      </div>
    </div>
  );
}
import PageHeading from "./PageHeading";
import Input from "./Input";
import Button from "./Button";
import ListHeading from "./ListHeading";
import Paragraph from "./Paragraph";
import TaskList from "./TaskList";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <PageHeading />
        <Input className="todo-input" placeholder="Enter task's name" />
        <Button className="add-btn" text="Add" />
      </div>
      <div className="todo-list">
        <ListHeading />
        <Paragraph className="error-info" />
        <TaskList />
      </div>
    </div>
  );
}
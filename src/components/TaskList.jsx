export default function TaskList(props) {
  const { tasksArray } = props;

  return (
    <ul>
      {tasksArray.map(task => <li key={task.id}>{task.name}</li>)}
    </ul>
  );
}
import "./App.css";
import TodoList, { TodoListItemProps } from "./TodoList";
import TodoListItem from "./TodoListItem";

const todos: TodoListItemProps[] = [
  {
    subject: "Shoot Videos",
    description: "React videos should be shot and completed during the day.",
    isCompleted: true,
  },
  {
    subject: "Organize The Curriculum",
    description: "Front end curriculum should be reviewed and organized.",
    isCompleted: false,
  },
  {
    subject: "Prepare Homework",
    description: "Homework should be prepared for the React section.",
    isCompleted: true,
  },
  {
    subject: "Make Design Revisions.",
    description: "Website design revisions should be made.",
    isCompleted: true,
  },
];

const renderListItem = (todo: TodoListItemProps) => (
  <TodoListItem
    subject={todo.subject}
    description={todo.description}
    isCompleted={todo.isCompleted}
  />
);

function App() {
  return (
    <>
      <h1>React Render Props</h1>
      <TodoList
        title="To Do List"
        todos={todos}
        renderListItem={renderListItem}
      />
    </>
  );
}

export default App;

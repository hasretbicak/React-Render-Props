import { TodoListItemProps } from "./TodoList";

function TodoListItem(todo: TodoListItemProps) {
  return (
    <div>
      <li className="todo-list-item">
        <div className="subject"> {todo.subject} </div>
        <div className="description"> {todo.description}</div>
        <div className="status">
          Is it completed ?{todo.isCompleted ? "Yes" : "No"}
        </div>
      </li>
    </div>
  );
}
export default TodoListItem;

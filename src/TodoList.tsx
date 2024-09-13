interface TodoListProps {
  title: string;
  todos: TodoListItemProps[];
  renderListItem: (todo: TodoListItemProps) => JSX.Element;
}

export interface TodoListItemProps {
  subject: string;
  description: string;
  isCompleted: boolean;
}

function TodoList({ title, todos, renderListItem }: TodoListProps) {
  return (
    <div className="todo-list">
      <div className="title">{title} </div>
      <ul>{todos.map(renderListItem)}</ul>
    </div>
  );
}
export default TodoList;

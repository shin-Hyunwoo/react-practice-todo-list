import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem id={todo.id} content={todo.content} />;
      })}
    </ul>
  );
};

export default TodoList;

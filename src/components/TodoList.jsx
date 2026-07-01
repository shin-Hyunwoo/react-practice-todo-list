import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, changeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            content={todo.content}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

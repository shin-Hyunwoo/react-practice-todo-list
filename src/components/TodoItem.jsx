const TodoItem = ({ id, content, deleteTodo, changeTodo }) => {
  return (
    <li>
      <span>{content}</span>
      <button onClick={() => changeTodo(id)}>수정</button>
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;

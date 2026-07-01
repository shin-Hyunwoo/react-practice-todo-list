const TodoItem = ({ id, content, deleteTodo }) => {
  return (
    <li>
      <span>{content}</span>
      <button>수정</button>
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;

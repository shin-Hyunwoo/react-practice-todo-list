const TodoItem = ({ id, content }) => {
  return <li key={id}>{content}</li>;
};

export default TodoItem;

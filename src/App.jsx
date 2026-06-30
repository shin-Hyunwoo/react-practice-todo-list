import { useRef, useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const inputRef = useRef();

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const onChangeInput = (event) => {
    setTodo(event.target.value);
  };

  const addNewTodo = () => {
    const newTodo = { id: crypto.randomUUID(), content: todo };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    inputRef.current.focus();
    setTodo('');
  };

  return (
    <>
      <h1>리액트로 만드는 투두리스트</h1>
      <div>
        <input value={todo} onChange={onChangeInput} ref={inputRef} />
        <button onClick={addNewTodo}>추가</button>
      </div>
      <TodoList todos={todos} />
    </>
  );
}

export default App;

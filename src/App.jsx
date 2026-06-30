import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const onChangeInput = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <h1>리액트로 만드는 투두리스트</h1>
      <div>
        <input value={todo} onChange={onChangeInput} />
        <button>추가</button>
      </div>
      <TodoList todos={todos} />
    </>
  );
}

export default App;

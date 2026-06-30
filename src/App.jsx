import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>리액트로 만드는 투두리스트</h1>
      <div>
        <input />
        <button>추가</button>
      </div>
      <TodoList todos={todos} />
    </>
  );
}

export default App;

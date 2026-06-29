import { useState } from 'react';
import TodoList from './components/TodoList';

const tempData = [
  { id: 1, content: '책 50페이지 읽기' },
  { id: 2, content: '오후 5시 PT 수업 출석' },
  { id: 3, content: '저녁 8시 리액트 학습하기' },
];

function App() {
  const [todos, setTodos] = useState(tempData);

  return (
    <>
      <h1>리액트로 만드는 투두리스트</h1>
      <TodoList todos={todos} />
    </>
  );
}

export default App;

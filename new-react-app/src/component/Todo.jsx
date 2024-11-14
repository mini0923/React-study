import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Todo = () => {

  const [input, setInput] = useState('');
  const [inputText, setInputText] = useState('');

  // 스토어의 todo슬라이스의 todolist 꺼내기
  const todolist = useSelector((state) => state.todo.todolist);

  const dispatch = useDispatch();

  const totalAmount = todolist.reduce((acc, todo) => {
    if (todo.type === 'import') {
      return acc + Number(todo.text); // 수입은 더함
    } else if (todo.type === 'expense') {
      return acc - Number(todo.text); // 지출은 뺌
    }
    return acc;
  }, 0);


  return (
    <div>
      수입<input type="radio" 
          value="import" 
          checked={inputText === 'import'}
          onChange={() => setInputText('import')} />

      지출<input type="radio" 
          value="expense" 
          checked={inputText === 'expense'} 
          onChange={() => setInputText('expense')}/>

      <br/>

      금액 <input type="number" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} />
      
      <button
      onClick={() => {
        if(input && inputText){
          dispatch({ type: 'todoSlice/ADD', payload:{ text: input, type: inputText }});
          setInput('');
        }
        }}>등록</button>

      <h3>총금액 : {totalAmount} 원</h3>

      <ul>
      {todolist.map((todo) => (
          <li key={todo.id}>
            ({todo.type === 'import' ? '수입' : '지출'}) {todo.text} 원
            <button
              onClick={() =>
                dispatch({ type: 'todoSlice/DELETE', payload:{id: todo.id} })
              }
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
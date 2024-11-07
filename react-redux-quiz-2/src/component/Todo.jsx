import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// useDispatch: 스토어에 있는 state를 변경하는 함수

// todo ui를 반환하는 컴포넌트
const Todo = () => {

  const [input, setInput] = useState('');

  // redux 스토어에서 dispatch 함수 가져오기(바로 사용X / 한번 꺼내오기)
  const dispatch = useDispatch();

  // redux 스토어의 state 중 todolist 가져오기
  const list =useSelector((state)=>{
    console.log(state);
    return state.todolist;
  });

  return (
    <div>
    
    {/* 새 할일 입력 필드 */}
    <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="새 할 일 입력"
  />

    {/* 추가 버튼 */}
  <button onClick={()=>{

    // dispatch(디스패치)에 '' 액션을 전달 + TODO 데이터 함께 전달
    dispatch({type: 'ADD', text: input });
    setInput(''); 
  }}>추가</button>

  <button onClick={() =>{
    // 디스패치에 RESET 액션을 전달
    // 초기화: 전체 삭제
    dispatch({ type: 'RESET'});
    
    }}>초기화</button> 

  {/* 할 일 목록 */}
  <ul>
    {/* 배열의 map함수를 사용하여 li 태그 생성 */}
    {/* jsx에서 태그를 동적으로 생성할때는 key 입력해야 함 */}
  
    { list.map( (todo)=>{
      return (
      <li key={todo.id}>{todo.text}<button onClick={ ()=>{
        // 디스패치에 DELETE액션 전달
        // 삭제: 단건 삭제, 일괄 삭제 (중1 선택)
        // 단건 삭제 => PK => TODO의 ID값 설정
        dispatch({type: 'DELETE', id: todo.id});
      } }>삭제</button></li>
      );
    } )}
  </ul>

  </div>
  )
}

export default Todo
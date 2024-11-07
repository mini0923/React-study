import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { countSlice } from '../store/countSlice';

// useSelector : Store에서 State를 가져오는 함수
// useDispatch : Store에서 State를 변경하는 함수

// + 버튼과 숫자를 담은 UI 반환
const Counter = () => {

  // redux 스토어의 state 중에서 num 가져오기
  const num = useSelector((state)=>{
    
    return state.counter.num;
  });

  // redux 스토어에서 dispatch 함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>{
        // 타입 수정: 슬라이스이름 + 액션이름
        // dispatch({ type: 'countSlice/UP', step: 2 });

        // 액션타입 대신 액션함수 사용하기
        dispatch( countSlice.actions.UP(2));

      }}>+</button>
      {num}
    </div>
  )
}

export default Counter
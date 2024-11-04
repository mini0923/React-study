import './App.css';
import { useReducer,useState } from 'react';

function App() {


  // Reducer 함수 : 이벤트에 따라 state를 변경하는 함수
  // 이전 state 값, 액션

  function countReducer(oldCount, action){
    console.log(action);
    
    if(action.type === 'UP') {
      return oldCount + action.num;
    } else if (action.type === 'DOWN') {
      return oldCount - action.num;
    } else if (action.type === 'RESET') {
      return 0;
    }
  }

  // Reducer 함수를 사용하여 state 생성
  // 인자 : Reducer(state을 변경하는 로직을 가지는 함수), state 초기값
  // 반환 : 현재 state, 값을 변경하는 dispatch 함수
  const[count, countDispatch] = useReducer(countReducer, 0);

  const [num, setNum] = useState(1);

  return (
    <div className='App'>
      <input type='button' value="-" onClick={()=>{
        countDispatch({type:'DOWN', num:num});
      }}></input>
      <input type='button' value="0" onClick={()=>{
        countDispatch({type:'RESET', num:num});
      }}></input>
      <input type='button' value="+" onClick={()=>{
        countDispatch({type:'UP', num:num});
      }}></input>
      <input type='text' onChange={(event)=>{
        setNum(Number(event.target.value));
      }}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;

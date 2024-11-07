import './App.css';
import { useReducer, useState } from 'react';

// To-do List

function App() {


  // useState -> useReducer
  const [todo, todoDispatch] = useReducer('');
  const [input, setInput] = useState([]);


  // 리듀서 함수 정의

  // useReducer 사용해서 state 생성
  const todoReducer = (oldState, action) => {
    // 조건 : 추가, 삭제, 초기화

    if(action.type === 'ADD') {
      // state는 이전 값을 변경할 수 없음
      // 이전 state를 복사하여 새로운 객체로 생성해야함!
      let newTodoList = [...oldState];

      // 만약 list에 한건도 없으면 0번, 있으면 마지막 id + 1
      let id = 0;

      if(oldState.length > 0){
        id = oldState.length;
      }

      let newTodo = {id:id, text : action.text};
      newTodoList.push(newTodo);

      return newTodoList;
    } 
    else if(action.type === 'DELETE') {
      // todoList에 해당 요소를 삭제하고 리턴

    } 
    else if(action.type === 'RESET') {
      // todoList을 모두 삭제하고 리턴

    }

    let [todolist, todoDispatch] = useReducer(todoReducer, []);

  }

  return (
    <div>
      <h3>To-Do-List</h3>

      <input type='text' value={input} onChange={(event)=>{
        setInput(event.target.value);
      }}/>

      <button onClick={()=>{
        todoDispatch({ type : 'ADD', text: input });
      }}>추가</button>

      <input type='button' value='초기화' />

      <ul>
        {
          // 배열의 map 함수를 사용하여 li 태그 생성
          // map 함수는 배열의 요소만큼 순회
          todoList.map( (todo)=>{
            return (
              <li>{todo.text}
              <button>삭제</button>
              </li>);
          })
        }
      </ul>
    </div>
  );
}

export default App;


// import './App.css';
// import { useReducer,useState } from 'react';

// function App() {


//   // Reducer 함수 : 이벤트에 따라 state를 변경하는 함수
//   // 이전 state 값, 액션

//   function countReducer(oldCount, action){
//     console.log(action);
    
//     if(action.type === 'UP') {
//       return oldCount + action.num;
//     } else if (action.type === 'DOWN') {
//       return oldCount - action.num;
//     } else if (action.type === 'RESET') {
//       return 0;
//     }
//   }

//   // Reducer 함수를 사용하여 state 생성
//   // 인자 : Reducer(state을 변경하는 로직을 가지는 함수), state 초기값
//   // 반환 : 현재 state, 값을 변경하는 dispatch 함수
//   const[count, countDispatch] = useReducer(countReducer, 0);

//   const [num, setNum] = useState(1);

//   return (
//     <div className='App'>
//       <input type='button' value="-" onClick={()=>{
//         countDispatch({type:'DOWN', num:num});
//       }}></input>
//       <input type='button' value="0" onClick={()=>{
//         countDispatch({type:'RESET', num:num});
//       }}></input>
//       <input type='button' value="+" onClick={()=>{
//         countDispatch({type:'UP', num:num});
//       }}></input>
//       <input type='text' onChange={(event)=>{
//         setNum(Number(event.target.value));
//       }}></input>
//       <span>{count}</span>
//     </div>
//   );
// }

// export default App;

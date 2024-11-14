import Todo from './component/Todo';
import { Provider } from 'react-redux'; 
import {createSlice, configureStore} from '@reduxjs/toolkit'


// Redux 방식 -> Redux Toolkit 방식

// 차이점
// 1. 스토어를 슬라이스 단위로 나눌 수 있음
// 2. 이전 state값을 유지할 필요가 없음


// 1. todo 슬라이스 생성
// 인자 : {}

const todoSlice = createSlice({
  name : 'todoSlice',
  initialState: { todolist: [] },
  // 액션타입별로 Reducer함수 정의
  reducers: {
    ADD: (state, action) => {

      // 리스트가 하나도 없으면 id는 0, 있으면 리스트의 길이로 설정

      let id = 0;
      if(state.todolist.length > 0){
        id = state.todolist.length;
      }

      let todo = { id : id, text: action.text };
      state.todolist.push(todo);
      
    },

    DELETE: (state, action) => {
      // 리스트에서 특정 요소 제거
      // 배열의 filter 함수 사용
      // filter 함수 : 배열의 요소를 순회하면서 조건을 만족하지 않는 요소는 제거
      const filterList = state.todolist.filter( (todo)=>{
        console.log(todo);
        
        if(todo.id !== action.id){
          return true;
        }else {
          return false;
        }
      } );

      // state 중에서 리스트를 필터링된 리스트로 교체
      state.todolist = filterList;
    },

    RESET: (state, action) => {
      state.todolist = [];
    }
  }
});

// 2. 슬라이스를 모아서 스토어 생성
// 각 슬라이스의 이름과 Reducer 함수 정의

const store = configureStore({
  reducer : {
    // 슬라이스이름 : 리듀서 함수
    todo:todoSlice.reducer
  }
});


function App() {



  return (
    <div>
      <h3>To-Do-List</h3>
      <Provider store={store}>
      <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;

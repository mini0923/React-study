import Todo from './component/Todo.jsx';
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
  
  reducers: {
    ADD: (state, action) => {

      let id = 0;
      if(state.todolist.length > 0){
        id = state.todolist.length;
      }

      let todo = { id : id, text: action.payload.text, type: action.payload.type };

      state.todolist.push(todo);
      
    },

    DELETE: (state, action) => {
      const filterList = state.todolist.filter( (todo)=>{
        console.log(todo);
        
        if(todo.id !== action.payload.id){
          return true;
        }else {
          return false;
        }
      } );

      // state 중에서 리스트를 필터링된 리스트로 교체
      state.todolist = filterList;
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
      <h3>가계부</h3>
      <Provider store={store}>
      <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;

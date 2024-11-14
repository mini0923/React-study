import './App.css';
import { Clac } from './component/Clac';
import { Provider }  from 'react-redux'
import {createSlice, configureStore} from '@reduxjs/toolkit';

// redux -> redux toolkit 방식으로 수정

// redux toolkit 이란?
// 1. store를 기능별로 나눌 수 있음
// 2. state의 불변성을 유지할 필요가 없음

// 변경
// reducer + createStore => createSlice + configureStore

// 1. 계산기 슬라이스 생성 (작은 스토어)
// 인자 : {} 슬라이스 이름, state 초기값, reducer 함수
const calcSlice = createSlice({
  name : 'calcSlice',
  initialState : {result : 0},
  reducers: {
    '+': (state, action) => {
      state.result = action.num1 + action.num2
    },

    '-': (state, action) => {
      state.result = action.num1 - action.num2
    },

    '*': (state, action) => {
      state.result = action.num1 * action.num2
    },

    '/': (state, action) => {
      state.result = action.num1 / action.num2
    },

    '0': (state, action) => {
      state.result = null;
    },
  }
});

// reducer의 변화
// 1. if switch 조건문으로 액션 타입을 분기 -> 액션타입만으로 분기
// 2. state 복제하고 변경된 state를 반환 -> state를 그대로 사용



function App() {
  // 2. 슬라이스를 모아서 스토어 생성
  const store = configureStore({
    reducer: {
      // 슬라이스 이름, reducer 함수
      calc: calcSlice.reducer
    }
  });
  return (
    <div>
      <h3>계산기</h3>
      {/* Store로 사용하고 싶은 하위 컴포넌트를 Provider로 감싸기 */}
      <Provider store={store}>
        <Clac></Clac>
      </Provider>
    </div>
  );
}

export default App;
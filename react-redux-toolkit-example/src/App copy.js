import './App.css';
import Counter from './component/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// Redux - 상태관리도구
// createStore - Store 생성 함수
// Provider - Store를 제공하는 함수

// Store 만드는 방법
// Reducer 함수 정의 -> Store 생성 -> Provider 설정

// 1. Reducer 함수 (상태 변경로직)
// 매개변수 : 이전 state, 액션(명령과 작업에 필요한 데이터)
// 리턴값 : 새로운 state

function reducer(oldstate, action){
  // state 복제본 생성
  let newState = {...oldstate};

  // state 중에서 num의 값을 step만큼 증가
  if(action.type === 'UP'){
    newState.num += action.step;
    return newState;
  }
  
  return oldstate;
}

// 2. Store 생성
// 인자 : Reducer, state 초기값

const initState = { num : 0 }

const store = createStore(reducer, initState);



function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;

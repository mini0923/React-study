import './App.css';
import { useReducer } from 'react';
import { Clac } from './component/Clac';
import { createStore } from 'redux';
import { Provider }  from 'react-redux'


function App() {

  console.log('App.....');
  

  // Reducer 함수 정의 : 상태 변경 로직
  // 매개변수 : 이전 state, action : 명령과 작업에 필요한 값
  // 리턴값 : 새로운 state
  // state : { } object
  const resultReducer = (oldState, action) => {

    // state 복제본 생성
    let newState = {...oldState};

    // state 중에 result 값을 변경
    // temp -> newState.result로 수정!
    


    switch (action.type) {
      case '+':
        newState.result = action.num1 + action.num2;
        break;
      case '-':
        newState.result = action.num1 - action.num2;
        break;
      case '*':
        newState.result = action.num1 * action.num2;
        break;
      case '/':
        newState.result = action.num1 / action.num2;
        break;
      case '0':
        newState.result = null;
        break;
      default:
        newState.result = null;
    }

    // 변경된 state
    return newState;
  };

  
  // const [result, resultDispatch] = useReducer(resultReducer, null); //리듀서와 초기값

  // useReducer -> createStore
  // redux 스토어 생성
  // 인자 : Reducer 함수 , state 초기값
  const store = createStore(resultReducer, {result:0});


  // Store를 사용할 준비 :
  // 1.reducer함수 정의 -> 2.store 생성 -> 3.Provider

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
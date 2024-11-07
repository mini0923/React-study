import './App.css';
import Counter from './component/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store'


// redux -> redux toolkit 방식으로 변경!

// redux toolkit? redux + 부가기능
// 1. 스토어를 기능별로 나눌 수 있음
// 2. state의 불변성을 유지할 필요가 없음

// toolkit 으로 스토어 만드는 방법
// 카운터 슬라이스 생성 > 슬라이스를 모아서 스토어 생성

// reducer + createStore => createSlice + configureStore

// 1. 카운터 슬라이스 생성(작은 스토어)

// 인자: {} 슬라이스 이름, 상태 초기값, Reducer 함수
// Key 값은 고정!

// 카운트 슬라이스 내보내기


// reducer의 변화
// 1. 이전코드는 조건문을 사용했으나, 슬라이스는 액션타입만 쓰면된다.
// 2. 이전코드는 state를 복제하고 변경된 state를 반환했지만
//    슬라이스는 state를 그대로 사용하면된다.

// 2. 슬라이스를 모아서 store 생성

// 인자 : {} 각 슬라이스의 reducer 넣기


function App() {
  return (
    <div>
      {/* Provider로 앱에 스토어 주입 */}
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;

import './App.css';
import Left1 from './component/Left';
import Right1 from './component/Right';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// redux: 앱 전역에서 state를 관리하는 도구
// 이 도구를 통해 컴포넌트 간 state를 공유할 수 있다

// Provider: 하위 컴포넌트들에게 스토어를 전달하는 역할

// state를 생성하기 위해 redux를 사용

// state 변경 로직을 가지고 있는 함수를 정의
// redux에서 state를 관리할 때는 object로 관리

// reducer 함수 정의 : state -> 스토어 생성 -> Provider 설정
// 인자 : 이전 state, action(명령과 작업에 필요한 데이터)
// 리턴값 : 새로운 state

function reducer(oldState, action) {
  
  // state 복제본 생성
  // 1. react는 이전 state를 유지하려는 성격이 있음
  // 2. object는 주소값을 가지고 있기 때문에 값을 수정해도 변화가 없음
  const newState = {...oldState};

  if(action.type === 'PLUS'){
    newState.num++;
  }
  return newState;
}

// redux 스토어 생성
// store : state를 전역적으로 관리하는 저장소/
const store = createStore(reducer, {num : 1 });


function App() {
  return (
    <div className='root'> 
      {/* Store를 사용하기위해 자식들을 Provider로 감싸기 */}
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {


  // state 는 컴포넌트의 생명주기를 관리하는 데이터이므로
  // 일반함수에서는 사용할 수 없다.
  const [inputCount, setInputCount] = useState(0);

  const inputLine = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <div>
     <input onChange={inputLine} placeholder='텍스트를 입력해주세요'></input>
     <br/>

     <span>글자수 : {inputCount}</span>
    </div>    
  );

}

export default App;

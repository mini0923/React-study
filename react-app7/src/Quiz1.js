import './App.css';
import { useState } from 'react';

function Button(proprs) {
  console.log(proprs);
  return (
    <button onClick={
      ()=>{
        proprs.onClick();
      }

    }>{proprs.text}</button>
  );
}



function App() {


  // state 는 컴포넌트의 생명주기를 관리하는 데이터이므로
  // 일반함수에서는 사용할 수 없다.
  const [num, setNum] = useState(0);

  const calculate = (text) => {
    if(text === "+"){
      setNum(num + 1);
    } else if (text === "-"){
      setNum(num - 1);
    } else if (text === "0"){
      setNum(0);
    }
  };
  

  return (
    <div>
      <div>
        <Button text={"+"} onClick={() => calculate("+")}/>
        <Button text={"0"} onClick={() => calculate("0")}/>
        <Button text={"-"} onClick={() => calculate("-")}/>
      </div>
        <h3>{num}</h3>
    </div>    
  );

}

export default App;
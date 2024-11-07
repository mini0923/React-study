import { useDispatch } from "react-redux";

// useDispatch : Store에 있는 state를 변경하는 함수

const Right1 = ()=>{

  console.log('Right1...');
  

  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

const Right2 = ()=>{
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

// + 버튼을 클릭하면 num이 1 증가되도록 처리


const Right3 = ()=>{

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={ ()=>{

        // dispatch로 'PLUS' 액션을 전달
        // dispatch -> reducer 
        dispatch({ type: 'PLUS' });

      } }></input>
    </div>
  );
}

export default Right1;
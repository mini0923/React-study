import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

function Item(){
  return (
    
      <div>Item Component</div>
  );
}



function App() {
  return (
    <div>
    <header>
      <h1>Item List</h1>
    </header> 
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    </div>
  );
}

export default App;

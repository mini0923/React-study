import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

function Content(){
  return (
    <div>Content Component</div>
  );
}

function Section(){
  return (
    <div>
      <h1>Section Component</h1>
      <Content></Content>
      <Content></Content>
    </div>
  );
}



function App() {
  return (
    <div>
      <Section></Section>
      <Section></Section>
    </div>
  );
}

export default App;

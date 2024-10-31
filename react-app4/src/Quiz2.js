
import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

function Home(){
  return (
      <div>Home</div>
  );
}

function About(){
  return (
      <div>About</div>
  );
}

function Contact(){
  return (
      <div>Contact</div>
  );
}

function Navbar() {
  return (
    <div>
      <h1>Navigation</h1>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

function App() {
  return (
    <Navbar></Navbar>
  );
}

export default App;

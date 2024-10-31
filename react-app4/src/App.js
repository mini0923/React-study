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

// import logo from './logo.svg';
// import './App.css';

// // 일반함수
// // 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

// function Home(){
//   return (
//       <div>Home</div>
//   );
// }

// function About(){
//   return (
//       <div>About</div>
//   );
// }

// function Contact(){
//   return (
//       <div>Contact</div>
//   );
// }

// function Navbar() {
//   return (
//     <div>
//       <h1>Navigation</h1>
//       <div><Home /></div>
//       <div><About /></div>
//       <div><Contact /></div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Navbar></Navbar>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// // 일반함수
// // 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

// function Item(){
//   return (
    
//       <div>Item Component</div>
//   );
// }



// function App() {
//   return (
//     <div>
//     <header>
//       <h1>Item List</h1>
//     </header> 
//     <Item></Item>
//     <Item></Item>
//     <Item></Item>
//     <Item></Item>
//     <Item></Item>
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// // 일반함수
// // 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

// function Header(){
//   return (
//     <header>
//       <h1><a href='/'>Web</a></h1>
//     </header>
//   );
// }

// function Nav() {
//   return (
//     <ol>
//       <li><a href='/read/1'>html</a></li>
//       <li><a href='/read/2'>css</a></li>
//       <li><a href='/read/3'>js</a></li>
//     </ol>
//   );
// }

// function Article () {
//   return (
//     <article>
//       <h2>Welcome</h2>
//       Hello, WEB
//     </article>
//   );
// }


// function App() {
//   return (
//     <div>
//       <Header></Header>
//       <Nav></Nav>
//       <Article></Article>
//     </div>
//   );
// }

// export default App;

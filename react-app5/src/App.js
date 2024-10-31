import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

// props : Header 컴포넌트를 사용하는 쪽에서 전달받은 속성들
function Header(props){

  console.log(props);

  // PROPS는 READONLY로 변경할 수 없음
  // 변경할 때는 부모컴포넌트에서 값을 변경해야함
  // props.title = 'AAA';

  return (
    <header>
      <h1><a href='/'>React</a></h1>
    </header>
  );
}

// props: 부모 컴포넌트에서 전달받은 속성들
function Nav(props) {

  // li 태그를 담을 배열 생성
  const lis =[];


  for(let t of props.topics){
  
    // object -> <li>
    // jsx에서 태그를 동적으로 생성할 때는 각 태그에 key를 부여해야 함
    lis.push(<li key={t.id}><a href={'/read/' + t.id}> {t.title}</a></li>);

  }

  return (
    <ol>
      {lis}
    </ol>
  );

}

function Article(props) {
  console.log(props);

  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
  
}


function App() {

  // 객체 타입의 배열 생성
  const topics = [
    {id:1, title:'html', body: 'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'},
  ];

  return (
    <div className="App">
      {/* Header 컴포넌트에 title 속성을 전달 */}
      <Header title="REACT"></Header>
      {/* Nav 컴포넌트에 topics 배열을 props로 전달 (topics="topics"로 쓰면 문자열로 전달됨) */}
      <Nav topics={topics}></Nav>
      {/* Article 컴포넌트를 사용하여 다양한 형태의 콘텐츠를 생성 */}
      <Article title="Welcome" body="Hello, Web"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );

}

export default App;

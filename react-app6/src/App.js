import logo from './logo.svg';
import './App.css';

function Header(props){

  return (
    <header>
      <h1><a href='/' onClick={
        (event) => {
          event.preventDefault(); // 페이지 이동 방지
          props.onChangeMode(); // props로 전달받은 이벤트 함수 실행
        }
      }>{props.title}</a></h1>
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
    lis.push(<li key={t.id}>
      <a href={'/read/' + t.id} id={t.id} onClick={
        (event) => {
          event.preventDefault(); // 이벤트 객체로 페이지 이동 방지          
          props.onChangeMode(event.target.id); // props로 전달받은 함수 호출
        }
      }> 
        {t.title}
      </a>
    </li>);

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
    <div>
      {/*Header 컴포넌트에 이벤트 기능 추가*/}
      <Header title="Web" onChangeMode= {
        () => {
          alert('Hi');
        }
      }></Header>

      {/* Nav 컴포넌트에 이벤트 기능 추가 
      클릭하면 해당 id가 경고창으로 출력 */}
      <Nav topics={topics} onChangeMode={
        (id) => {
          alert(id);
        }
      }></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );

}

export default App;

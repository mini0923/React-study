import './App.css';
import { useState } from 'react';

function Header(props){

  return (
    <header>
      <h1><a href='/' onClick={
        (event) => {
          event.preventDefault(); 
          props.onChangeMode(); 
        }
      }>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {

  const lis =[];


  for(let t of props.topics){

    lis.push(<li key={t.id}>
      <a href={'/read/' + t.id} id={t.id} onClick={
        (event) => {
          event.preventDefault();        
          props.onChangeMode(event.target.id); 
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
  // console.log(props);

  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  ); 
}

function Create(props) {

  return (
    <article>
      <h2>Create</h2>

      {/* submit 버튼을 클릭하면 전달받은 이벤트 함수 실행 */}
      <form onSubmit={
        (event)=>{
          event.preventDefault(); // 페이지 이동 방지

          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body); // 폼 데이터 꺼내기
        }
      }>
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>

    </article>
  );
}

// 수정 화면을 반환하는 컴포넌트
function Update(props){

  // console.log(props);

  // props로 전달받은 데이터를 state로 변경
  const [title, setTitle] = useState(props.title);  // 초기값
  const [body, setBody] = useState(props.body); // 초기값
  
  return (
    <article>
      <h2>Update</h2>

      {/* submit 버튼을 클릭하면 전달받은 이벤트 함수 실행 */}
      <form onSubmit={
        (event)=>{
          event.preventDefault(); // 페이지 이동 방지
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body); // 폼 데이터 꺼내기

        }
      }>
        {/* Props로 전달받은 데이터를 입력필드에 설정 */}
        <p>
          <input type="text" name="title" value={title} 
          placeholder="title" onChange={(event)=>{
            // 사용자가 값을 변경하면 state를 업데이트
            setTitle(event.target.value);            
          }}>
          </input>
        </p>
        <p>
          <textarea name='body' value={body} 
          placeholder='body' onChange={(event)=>{
            setBody(event.target.value);
          }}></textarea>
        </p>
        <p>
          <input type='submit' value='Update'></input>
        </p>
      </form>

    </article>
  );
}


function App() {

  // 모드를 결정하는 함수
  // let mode = "WELCOME";

  // mode를 state로 생성
  // state: 상태를 관리하며 컴포넌트를 새로 생성하는 역할
  let [mode, setMode] = useState("WELCOME"); // 초기값

  // nav의 id를 저장할 state 생성
  let [id, setId] = useState(null);

  // 게시물 등록할 떄 사용할 새로운 ID
  let [nextId, setNextId] = useState(4);

  // 본문을 저장할 변수
  let content = null;

  let [topics, setTopics] = useState([
    {id:1, title:'html', body: 'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'},
  ]);

  // 수정 링크를 저장할 변수
  let contextControl = null;


  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>

  } else if (mode === "READ"){
    // 선택한 id에 따라 Article 컴포넌트 생성
    let title, body = null;

    for (let t of topics){
      
      if(t.id === Number(id)){  // 배열의 id와 현재 id가 같은지 비교
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>

    // 모드가 Read일 경우, 수정 링크 생성
    contextControl =
    <>
       <a className="update-a" href={'/update/' + id} onClick={
        (event)=>{
          event.preventDefault(); // 페이지 이동 방지
          setMode('UPDATE');  // 수정 모드로 전환
        }
       }>Update</a> 
        <input className='delete-input' type='button' value='Delete'
        onClick={()=>{
          // topics 배열에서 선택된 topic을 삭제

          const newTopics = [];

          // 해당 요소를 제외한 나머지 요소를 배열에 옮기기
          for(let t of topics){
            // topic의 id가 삭제할 id가 아니라면
            if(t.id !== Number(id)){
              newTopics.push(t);
            }
          }
          // 새로운 배열로 state를 업데이트
          setTopics(newTopics);
          
          // 삭제가 끝났으면 모드를 전환(삭제 -> 처음)
          setMode('WELCOME');

        }}
        ></input>

    </>

  } else if(mode === "CREATE"){ // 모드가 CREATE라면, 등록 컴포넌트를 반환
    
    // Create 컴포넌트에서 등록 버튼을 클릭하면 게시물이 등록되는 이벤트 추가  
    content = <Create onCreate={
      (title, body) => {

        // 기존 배열을 복사하여 새로운 배열로 생성
        let newTopics = [...topics];

        let newTopic = {id:nextId, title: title, body:body};

        newTopics.push(newTopic);

        setTopics(newTopics); // 100번지 -> 200번지

        // 등록이 정상적으로 끝났으면 상세화면으로 이동
        setMode('READ');
        setId(nextId);

        // 다음 아이디를 1만큼 증가시키기
        setNextId(nextId + 1);

      }
    }>
    </Create>
  } else if (mode === 'UPDATE') {

    // 해당 Topic의 데이터를 Update 컴포넌트로 전달

    let title, body = null;

    // id가 일치하는 topic 찾기
    for (let t of topics){
      // console.log(t.id, id);  // 각 요소의 id와 현재 id 비교

      if(t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }


    // 모드가 UPDATE로 전환되면 수정폼을 표시
    content = <Update title={title} body={body}
      onUpdate={(title, body)=>{

        // 기존 배열을 복사하여 새로운 배열로 생성
        const newTopics = [...topics];


        // 전달받은 데이터로 기존 topic을 교체
        const updateTopic = {id: Number(id), title: title, body: body}

        // topics 배열에서 해당 id와 일치하는 topic을 찾아서 교체
        for(let i in newTopics){
          if(newTopics[i].id === Number(id)){
            // id가 일치하면 요소를 교체
            newTopics[i] = updateTopic;
          }
        }
        setTopics(newTopics);
        setMode('READ');
      }}
    ></Update>
  }

  return (
    <div>

      {/* Header를 클릭하면 모드가 WELCOME으로 변경 */}
      <Header title="Web" onChangeMode= {
        () => {
          setMode('WELCOME');
        }
      }></Header>

      {/* Header를 클릭하면 모드가 READ로 변경 */}
      <Nav topics={topics} onChangeMode={
        (id) => {
          setMode('READ');
          setId(id);
        }
      }>
      </Nav>

      {content}

      {/* 등록폼으로 이동하는 링크 */}
      <a href='/create' onClick={
        (event) => {
          event.preventDefault(); // 다른 페이지로 이동하는 것을 방지
          setMode('CREATE');  // 모드 전환
        }
      }>Create</a>

      {contextControl}


    </div>
  );

}

export default App;

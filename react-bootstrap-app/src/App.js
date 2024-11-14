import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home
 from './features/Home';
import Register from './features/Register';
import Login from './features/Login';
import BoardList from './features/BoardList';

function App() {
  // Router로 URL 경로에따라 컴포넌트 설정
  // ex) / -> Home 컴포넌트
  //     /board/list -> BoardList 컴포넌트

  return (
    <div>
      <Routes>
        {/* 중첩 라우트 설정 */}
        {/* /를 최상위 경로로 설정 */}
        <Route path="/" element={<Layout />}>
          {/* 중첩 라우트는 부모와 자식 컴포넌트가 함께 렌더링되는 구조 */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/* 게시물 관련 */}
          <Route path='/board/list' element={<BoardList></BoardList>}></Route>
          <Route path='/board/register' element={'board register...'}></Route>
          <Route path='/board/read/:no' element={'board red...'}></Route>
          <Route path='/board/modify/:no' element={'board modify...'}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;

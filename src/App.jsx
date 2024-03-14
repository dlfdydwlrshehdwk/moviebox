import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './pages/Main';
import Booking from './pages/Booking';
import Footer from './components/layout/Footer';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Login from './components/popup/Login';
import Dim from './components/dim/Dim';

function App() {
  let [header,setHeader] = useState(false) // 헤더 화이트 or 검정
  let [login,setLogin] = useState(false) // 로그인팝업창

  const eventHandler = {
    showLoginPopup : () => setLogin(true),
    hideLoginPopup : () => setLogin(false),
  }

  useEffect(()=>{ // 도메인주소에 홈이아니면 흰색헤더 아니면 검정헤더
    let a = window.location.pathname;
    a == '/' ? setHeader(false) : setHeader(true)
  },[])
  return (
    <>
    <Header whiteMode={header} handler={eventHandler}/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/booking' element={<Booking handler={eventHandler} />}/>
      </Routes>
    </BrowserRouter>
    {
      login && <Dim><Login handler={eventHandler}/></Dim>
    }
    
    </>
  );
}

export default App;

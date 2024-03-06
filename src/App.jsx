import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './pages/Main';
import Booking from './pages/Booking';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/booking' element={<Booking />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import Data from './pages/data';
import gym from './pages/gym';
import mat from './pages/mat';
import norsk from './pages/norsk';
import Home from './pages/home';
import noPage from './pages/noPage';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link href='/'> Home </Link>
        </li>
        <li>
          <Link to='/data-kurs'> Data </Link>
        </li>
      </ul>
    </nav>

  
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/data-kurs' element={<Data />} />
        <Route path='/gym-kurs' element={<gym />} />
        <Route path='/m&h-kurs' element={<mat />} />
        <Route path='/norsk-kurs' element={<norsk />} />
        <Route path='*' element={<noPage />} />
      </Route>
    </Routes>  

    </>

  );
}

export default App;

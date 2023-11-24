import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Data from './pages/data';
import Gym from './pages/gym';
import Mat from './pages/mat';
import Norsk from './pages/norsk';
import Home from './pages/home';
import NoPage from './pages/noPage';
import Layout from './pages/layout';
import LoggInn from './pages/logg-inn';
import Meld from './pages/meld';
import Etter from './pages/etterLogg-inn';
import { Link } from 'react-router-dom';


function App() {

 
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} />
        <Route index element={<Home />} /> 
        <Route path='/home' element={<Home />} />

        <Route path='/logg-inn' element={<LoggInn />} />
        <Route path='/meld-på' element={<Meld />} />
        <Route path='/etter' element={<Etter />} />
        <Route path='/data-kurs' element={<Data />} />
        <Route path='/gym-kurs' element={<Gym />} />
        <Route path='/mat-kurs' element={<Mat />} />
        <Route path='/norsk-kurs' element={<Norsk />} />
        <Route path='*' element={<NoPage />} />
      
    </Routes>  

    </>

  );
}

export default App;

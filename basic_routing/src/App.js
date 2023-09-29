import logo from './logo.svg';
import './App.css';
import './Elev';
import Elev from './Elev';
import { Route, Routes } from "react-router-dom"
import Klassekart from './klassekart';
import Profile from './profile';

function App() {

 

  return (

    <Routes>
    <Route path='/' element={<Klassekart />} />
    <Route path='/:profile' element={<Profile />} />
    <Route />

  </Routes>
  ); 
}

export default App;

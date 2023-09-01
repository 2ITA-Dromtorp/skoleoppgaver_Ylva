import logo from './images/peter_pan.jpeg';
import './App.css'; 
import MyApp from './NewComponent';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1> dette er en komponent som heter app som ligger i app.js</h1> 
        <img src={logo} className="App-logo" alt="logo" />        
        <MyApp /> 
        <Profile />
        <logo />

       
      </header>
    </div>
  );
}

export default App;





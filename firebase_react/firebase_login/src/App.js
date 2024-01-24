import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="nav">

          <h1> her blir login side </h1>
          </div>
        </header>
      <body> 
        <div className="login">
          <h1> login side? </h1>
          <p> brukernavn </p>
          <input type="text" className="login-input"/>
          <p> passord </p>
          <input type="text" className="login-input"/>
            <div id='login-knapp'> 
                    <button className='logg'> logg inn nå </button>
            </div>
        </div>

      </body>
     
    </div>
  );
}

export default App;

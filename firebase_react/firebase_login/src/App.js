import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  //baree routing egt

  const [brukernavn, setBrukernavn] = useState('');
  const [passord, setPassord] = useState(''); 

  /*function handleSubmit(event) {
    event.preventDefault();
    console.log(brukernavn, passord);
    
  }*/

  const handleSubmit = () => {
    console.log(brukernavn, passord);

    const dataToSend = {
      brukernavn: brukernavn,
      passord: passord
    }

    fetch('http://localhost:3000/api/login', {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
    .then(async (res) => {
              const json = await res.json();
              console.log(json);
              setBrukernavn(brukernavn)
              setPassord(passord)

          })
          .catch((error) => {
            console.log('ERRRRR WRONG dun dun duuun,',error);
          });

  }
<form onSubmit={handleSubmit}>
//alt inni her

</form>


  return (
    <div className="App">
        <header className="App-header">
          <div className="nav">

          <h1> her blir login side </h1>
          </div>
        </header>
        <body className="App-body"> 
          <div className="login">
            <h1> login side? </h1>

            <div className="brukernavn">
              <p> brukernavn </p>
              <input type="text" value={brukernavn} onInput={e => setBrukernavn(e.target.value)}/>
            </div>

            <div className="passord">
              <p> passord </p>
              <input type="text" value={passord} onInput={e => setPassord(e.target.value)}/>
            </div>

            <div id='login-knapp'> 
              <button className='logg' onClick={() => handleSubmit()}> logg inn nå </button>
            </div>
          </div>

        </body>
     
    </div>
  );
}

export default App;

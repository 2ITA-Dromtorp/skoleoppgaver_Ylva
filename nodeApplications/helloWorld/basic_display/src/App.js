import logo from './logo.svg';
import './App.css';
import Update from './update';
import Insert from './insert';
import Select from './select';
import Delete from './delete';
import {useState} from 'react';


function App() {

  const [connect, setConnect] = useState(<Select/>);

  function selectPush() {
    setConnect(<Select/>);
  }

  function updatePush() {
    setConnect(<Update/>);
  }
  function insertPush() {
    setConnect(<Insert/>);
  }
  function deletePush() {
    setConnect(<Delete/>);
  }



  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'> 
          <button onClick={selectPush} id='select'> SELECT </button>
          <button onClick={updatePush} id='update'> UPDATE </button>
          <button onClick={insertPush} id='insert'> INSERT </button>
          <button onClick={deletePush} id='delete'> DELETE </button>
        </div>
      </header>
      <div className="App-body">

        <div className='inner-body'>

          {connect}
        </div> 


      </div>
    </div>
  );
}

export default App;

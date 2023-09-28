import { useState } from 'react';
import './App.css';
import ukjent from './images/maskin_ukjent.png';
import spiller_papir from './images/spiller_papir.png';
import spiller_stein from './images/spiller_stein.png';
import spiller_saks from './images/spiller_saks.png';
import maskin_papir from './images/maskin_papir.png';
import maskin_stein from './images/maskin_stein.png';
import maskin_saks from './images/maskin_saks.png';




function App() {

  const [playerPoeng, setPlayerPoeng] = useState(0)
  const [maskinPoeng, setMaskinPoeng] = useState(0)
  const [playerChoice, setPlayerChoice] = useState({id: 0, image: ukjent});
  const [maskinChoice, setMaskinChoice] = useState({image: ukjent});
  const [winner, setWinner] = useState('Ukjent');


  function Stein() {
      setPlayerChoice({id: 0, image: spiller_stein});
      Spill();
  }
  function Saks() {
    setPlayerChoice({id: 1, image: spiller_saks});
    Spill();
  }
  function Papir() {
    setPlayerChoice({id: 2, image: spiller_papir});
    Spill();
  }

  function Spill() {

    let myArray = [maskin_stein, maskin_saks, maskin_papir];
    let randomNumber = Math.floor(Math.random() * 3)
    let maskinChoice_temp = myArray[randomNumber];

    setMaskinChoice({image: maskinChoice_temp, poeng: 0});

    if (playerChoice.id == randomNumber) {
      setWinner('uavgjort')

    } else if (playerChoice.id == 0 && randomNumber == 1) {
      setWinner('Player wins')
      setPlayerPoeng(playerPoeng + 1)

    } else if (playerChoice.id == 0 && randomNumber == 2) {
      setWinner('Maskin wins')
      setMaskinPoeng(maskinPoeng + 1)

    } else if (playerChoice.id == 1 && randomNumber == 2) {
      setWinner('Player wins')
      setPlayerPoeng(playerPoeng + 1)

    } else if (playerChoice.id == 1 && randomNumber == 0) {
      setWinner('Maskin wins')
      setMaskinPoeng(maskinPoeng + 1)

    } else if (playerChoice.id == 2 && randomNumber == 0) {
      setWinner('Player wins')
      setPlayerPoeng(playerPoeng + 1)

    } else if (playerChoice.id == 2 && randomNumber == 1) {
      setWinner('Maskin wins')
      setMaskinPoeng(maskinPoeng + 1)

    }
  }



  function checkPlay() {



  }




  return (

    <div className='container'>

        <div className='top'>


        <div className='player1'>
          <img src={playerChoice.image} alt='spiller ukjent'/>
        </div>

        <div className='result'>
          <p>{playerPoeng}</p>
          <p>{winner}</p>
          <p>{maskinPoeng}</p>
        </div>

        <div className='maskin'>
          <img src={maskinChoice.image} alt='spiller ukjent'/>
        </div>
      
        </div>


        <div className='bottom'>


          <button className='button' onClick={Papir}>papir</button>
          <button className='button' onClick={Stein}>stein</button>
          <button className='button' onClick={Saks}>saks</button>
          

        </div>

    

    </div>

  );
}

export default App;

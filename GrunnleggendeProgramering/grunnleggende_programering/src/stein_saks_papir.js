import { useState } from 'react';
import maskin_ukjent from './images/maskin_ukjent.png'; 
import maskin_stein from './images/maskin_stein.png'; 
import maskin_saks from './images/maskin_saks.png'; 
import maskin_papir from './images/maskin_papir.png'; 
import spiller_stein from './images/spiller_stein.png'; 
import spiller_saks from './images/spiller_saks.png'; 
import spiller_papir from './images/spiller_papir.png'; 


export default function Spill() {


    const [PlayerChoice, setPlayerChoice] = useState(maskin_ukjent)
    const [MaskinChoice, setMaskinChoice] = useState(maskin_ukjent)


    function changeToStein() {
        setPlayerChoice(spiller_stein)

    }
    function changeToSaks() {
        setPlayerChoice(spiller_saks)

    }
    function changeToPapir() {
        setPlayerChoice(spiller_papir)

    }

/*
    function changeToStein() {
        setMaskinChoice(maskin_stein)

    }
    function changeToSaks() {
        setMaskinChoice(maskin_saks)

    }
    function changeToPapir() {
        setMaskinChoice(maskin_papir)

    }



    function maskinStatus() {


    }
*/

    return (
        
        <div class="SSP spill">

            <h1> stein, saks, papir spill  </h1>
            <img src={maskin_ukjent} alt="Ukjent"></img>
            <h2> vs </h2>
            <img src={PlayerChoice} alt="Ukjent"></img>
            <div class="knapp" >
            <button onClick={changeToStein}>Stein</button>
            <button onClick={changeToSaks}>Saks</button>
            <button onClick={changeToPapir}>Papir</button>

            </div>
            
            <div class="SpillKnapp">
            <button onClick={Spill}>Spill</button>

            </div>
            
            
        </div>
    )
   

}
import { useState } from 'react';
import Ukjent from './images/maskin_ukjent.png'; 
import Stein from './images/maskin_stein.png'; 



export default function Spill() {
    alert ('click');
    return (
        
        <div>

            <h1> stein, saks, papir spill  </h1>
            <img src={Ukjent} alt="Ukjent"></img>
            <h2> vs </h2>
            <img src={Ukjent} alt="Ukjent"></img>
            <button onClick={Spill}>Stein</button>
            <button onClick={Spill}>Saks</button>
            <button onClick={Spill}>Papir</button>

            <button onClick={Spill}>Spill</button>
            
        </div>
    )
   

}
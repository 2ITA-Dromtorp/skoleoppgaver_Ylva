import { useState, useEffect } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

export default function Nedtelling() {

    const [count, setCount] = useState(10);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {

        let myinterval = setInterval(() => {

            setCount(count - 1)

            if (count < 1) {
                setCount(10);
                setIsExploding(true);
            } else {
                setIsExploding(false);
            }

        }, 1000)

        return () => clearInterval(myinterval);

    })

    let bigBang = {
        force: 0.8,
        duration: 3000,
        particleCount: 250,
        width: 1600,
        height: 1600,
        colors: [
            '#8379dd',
            '#faef61',
            '#912e5b',
            '#56c8ca'
            ],
      }
    
      let smallerBigBang = {
        force: 0.9,
        duration: 5000,
        particleCount: 250,
        width: 1600,
        height: 1600,
        colors: [
            '#8379dd',
            '#faef61',
            '#912e5b',
            '#56c8ca'
            ],
      }


    return (
        
        <div>

            <h1> Nedtelling </h1>
            <h2> {count} </h2>
           <div className="bigBang"> {isExploding && <ConfettiExplosion {...bigBang }/>} </div> 
            {isExploding && <ConfettiExplosion {...smallerBigBang }/>}
            

        </div>
    )
}
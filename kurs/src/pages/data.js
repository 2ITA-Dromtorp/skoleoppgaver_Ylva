import './data.css';
import { useNavigate } from "react-router-dom"; 
import data from '../images/data.jpg';

export default function Data() {

    const navigate = useNavigate();

    return (
        <div className="data">
            <div className="data-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <p> søk </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className='data-body'>
                <h1> boo! </h1>
                <div className='tidsinfo'> 
                    <p> grunnleggende datakunnskap's kurset på drømtorp vidregående </p> 
                    <p> kommer til å vare fra 10 januar - 10 april.</p>
                    <p> mandag kl 18-20</p>
                </div>

                <div className='info'>
                    <p> masse lorem ipsum </p>

                </div>

                <div id='bilde'>
                    <img src={data} className='bilde' alt='bilde av kode på en skjerm'/>
                </div>

                <button id='data-button'> meld deg på </button>

            </div>

        </div>

    );

}
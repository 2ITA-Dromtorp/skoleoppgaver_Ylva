import './norsk.css';
import { useNavigate } from "react-router-dom"; 
import norsk from '../images/norsk-flagg.jpg';

export default function Norsk() {

    const navigate = useNavigate();

    return (
        <div className="norsk">
            <div className="norsk-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className='norsk-body'>
                <h1> boo! </h1>
                <div className='tidsinfo'> 
                    <p> norsk kurset på drømtorp vidregående </p> 
                    <p> kommer til å vare fra 10 januar - 10 april.</p>
                    <p> tirsdag kl 18-20</p>
                </div>

                <div className='info'>
                    <p> masse lorem ipsum </p>

                </div>

                <div id='bilde'>
                    <img src={norsk} className='bilde' alt='bilde av norsk flagg'/>
                </div>

                <button onClick={()=> {navigate('/norskf')}} id='norsk-button'> meld deg på </button>

            </div>

        </div>

    );

}
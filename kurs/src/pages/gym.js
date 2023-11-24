import './gym.css';
import { useNavigate } from "react-router-dom"; 
import gym from '../images/gym.jpg';

export default function Gym() {

    const navigate = useNavigate();

    return (
        <div className="gym">
            <div className="gym-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <p> søk </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className='gym-body'>
                <h1> boo! </h1>
                <div className='tidsinfo'> 
                    <p> kroppsøving kurset på drømtorp vidregående </p> 
                    <p> kommer til å vare fra 10 januar - 10 april.</p>
                    <p> onsdag kl 18-20</p>
                </div>

                <div className='info'>
                    <p> masse lorem ipsum </p>

                </div>

                <div id='bilde'>
                    <img src={gym} className='bilde' alt='bilde av treningssenter'/>
                </div>

                <button id='gym-button'> meld deg på </button>

            </div>

        </div>

    );

}
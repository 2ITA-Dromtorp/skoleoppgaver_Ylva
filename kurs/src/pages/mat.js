import './mat.css';
import { useNavigate } from "react-router-dom"; 
import mat from '../images/mat.jpg';

export default function Mat() {

    const navigate = useNavigate();

    return (
        <div className="mat">
            <div className="mat-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className='mat-body'>
                <h1> boo! </h1>
                <div className='tidsinfo'> 
                    <p> heimkunnskap kurset på drømtorp vidregående </p> 
                    <p> kommer til å vare fra 10 januar - 10 april.</p>
                    <p> torsdag kl 18-20</p>
                </div>

                <div className='info'>
                    <p> masse lorem ipsum </p>

                </div>

                <div id='bilde'>
                    <img src={mat} className='bilde' alt='bilde av fem skåler med forskjellig sunn mat'/>
                </div>

                <button onClick={()=> {navigate('/matf')}} id='mat-button'> meld deg på </button>

            </div>

        </div>

    );

}
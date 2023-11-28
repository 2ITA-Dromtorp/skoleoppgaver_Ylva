import './meld.css';
import { useNavigate } from "react-router-dom"; 

export default function Meld() {

    const navigate = useNavigate();

    return (
        <div className="meld-på">
            <div className="meld-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className='meld-body'>
                <h1> boo! </h1>
                
            </div>

        </div>

    );

}
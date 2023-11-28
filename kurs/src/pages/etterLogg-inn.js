import './etterLogg-inn.css';
import { useNavigate } from "react-router-dom"; 

export default function Etter() {

    const navigate = useNavigate();

    return (
        
        <div className="etter">

            <div className="etter-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className="etter-body">
                <h1> du har nå logget inn! </h1>
            </div>

        </div>

    );
}

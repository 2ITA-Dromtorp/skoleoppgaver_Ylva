import './ferdig.css';

import { useNavigate } from "react-router-dom"; 

export default function GymFerdig() {

    const navigate = useNavigate();

    return (
        
        <div className="Ferdig">

            <div className="ferdig-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <p> søk </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className="ferdig-body">
                <h1> du har nå meldt deg på kroppsøving kurset! </h1>
            </div>

        </div>

    );
}
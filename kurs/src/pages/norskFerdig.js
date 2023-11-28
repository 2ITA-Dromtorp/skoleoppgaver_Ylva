import './ferdig.css';
import { useNavigate } from "react-router-dom"; 




export default function NorskFerdig() {

    const navigate = useNavigate();
   
    const Enroll = ({ isLoggedIn }) => {
        return (
          <div>
            {isLoggedIn ? (
              <p>You have successfully enrolled in the course!</p>
            ) : (
              <p>Please log in to enroll in the course.</p>
            )}
          </div>
        );
      };
   
    /*
    skriv if setning
    */
  

    return (
        
        <div className="Ferdig">

            <div className="ferdig-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
            </div>
            <div className="ferdig-body">
                <h1> du har nå meldt deg på norsk kurs! </h1>
            </div>

        </div>

    );
}
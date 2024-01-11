// Importer de nødvendige biblioteker og stiler
import './update.css';
import axios from "axios";
import { useEffect, useState } from "react";

// Vi definerer en funksjonell komponent kalt update og eksporterer den som standard:
export default function Update() {
  // Vi bruker useState-kroken til å opprette tilstandsvariabler for customersData, hobby og id:
  const [customersData, setCustomersData] = useState([]); //TRENGER DU DENNE? 
  const [hobby, setHobby] = useState("");
  const [id, setId] = useState("");

  // Vi bruker useEffect-kroken til å hente kundedata når komponenten blir montert. 
  // Den kaller funksjonen getCustomersData:
  useEffect(() => {
    getCustomersData();
  }, []);

  // Vi definerer funksjonen getCustomersData som gjør en GET-forespørsel 
  //for å hente kundedata fra den angitte URL-en (http://localhost:3000/). 
  // De hentede dataene blir deretter satt ved hjelp av funksjonen setCustomersData:
  const getCustomersData = () => {
    axios
      .get("http://localhost:3000/")
      .then(response => {
        setCustomersData(response.data)
      })
      .catch(error => console.log(error));
  };

  //Vi definerer funksjonen handleUpdate som blir trigget når "UPDATE"-knappen
  // blir klikket. Den konstruerer en URL ved å sette inn verdien av hobby og id i 
  // en tekststreng. Deretter gjør den en GET-forespørsel til den angitte URL-en 
  // ved hjelp av axios.get:
  const handleUpdate = () => {
    const url = `http://localhost:3000/updateuser/${hobby}/${id}`; //hvor kommer updateuser fra? index

    axios
      .put(url) 
      .then(response => {
        console.log("Data updated successfully");
        // You can perform any additional actions after the update is successful
      })
      .catch(error => console.log(error));
  };

  // Dette er brukergrensesnittet for endring av hobby for en bestemt elev.
  // Vi rendrer et brukergrensesnitt (UI) for oppdateringsfunksjonaliteten. 
  // Dette inkluderer en overskrift, en tabellcontainer og skjemafelter for "ny 
  // hobby" og "ID". Verdien i "ny hobby"-feltet er bundet til hobby-tilstandsvariabelen, 
  // og verdien i "ID"-feltet er bundet til id-tilstandsvariabelen. Når verdiene i 
  // inntastingsfeltene endres, blir de tilsvarende setHobby- og setId-funksjonene 
  // kalt for å oppdatere tilstanden:
  return (
    <div>
      <h1>UPDATE</h1>
      <div className="table-container">
        <div className="weoweo">
          <div className="text box">
            <p>Text here hobby</p>
            <input type='text' id='hobby' value={hobby} onChange={(e) => setHobby(e.target.value)} />
          </div>
          <div className="text box">
            <p>Text here id</p>
            <input type='text' id='id' value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="submit">
            <button id='updateklikk' onClick={handleUpdate}>UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    //Denne oppdaterte koden lar deg skrive inn verdier for "ny hobby" og "ID" 
    //i inntastingsfeltene og klikke på "UPDATE"-knappen for å utløse 
    //handleUpdate-funksjonen. Funksjonen konstruerer den riktige URL-en og 
    //gjør en GET-forespørsel til serveren. Serveren din bør være konfigurert 
    //til å håndtere denne forespørselen på endepunktet /updateuser/:newhobby/:id 
    //og oppdatere den tilsvarende oppføringen i SQL-databasen.
  );
}




/*
import './update.css';
import axios from "axios";
import { useEffect, useState } from "react";
//import Updateuser from './index.js';


export default function Update() {

    const [connect, setConnect] = useState(<Updateuser/>);

    function updateuserPush() {
        setConnect(<Updateuser/>);
      }




      <button onClick={updateuserPush} id='submit'> submit </button>

    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
        getCustomersData();
    }, []);

    const getCustomersData = () => {
        axios
            .get("http://localhost:3000/")
            .then(response => {setCustomersData(response.data)})
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>UPDATE</h1>
            <div className="table-container">
                <div className="weoweo">
                    <div className="text box"> 
                        <p> text here hobby </p>
                        <input type='text' id='hobby'/>
                    </div>
                    <div className="text box"> 
                        <p> text here id </p>
                        <input type='text' id='id'/>
                    </div>
                    <div className="submit"> 
                        <button id='updateklikk'> UPDATE </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
*/
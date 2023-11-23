import './logg-inn.css';
import { useNavigate } from "react-router-dom";

export default function LoggInn() {

        const navigate = useNavigate();

    return (
        <>

        <div className="logg-inn">
            <header className="logg-inn-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <p> søk </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
        
            </header>
            <body className="logg-inn-body">

                <h1> logg inn her </h1>

                <div id='fornavn'>
                    <p> skriv inn fornavnet ditt her </p>
                     <input type="text" name="name" />
                </div>

                <div id='etternavn'>
                    <p> skirv inn etternavnet ditt her </p>
                     <input type="text" name="surname" />
                </div>

                <div id='e-post'>
                    <p> skriv inn e-posten din her</p>
                     <input type="text" name="e-post" />
                </div>

                <div id='nummer'>
                    <p> skriv inn nummeret ditt her </p>
                     <input type="text" name="nummer" />
                </div>

                <div id='login-knapp'> 
                    <button id='login'> logg inn nå </button>
                </div>

            </body>

        </div>
        </>
    );

}
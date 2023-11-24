import { useState } from 'react';
import './logg-inn.css';
import { useNavigate } from "react-router-dom";

export default function LoggInn() {

        const navigate = useNavigate();

        const [username, setUsername] = useState("");
        const [number, setNumber] = useState("");
        const [epost, setEpost] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = () => {
            console.log(username, number, epost, password);

            const dataToSend = {
                username: username,
                number: number,
                epost: epost,
                password: password
            }

            fetch('/create-user', {
                method:'POST',
                headers:{
                  "content-type":"application/json",
                },
                body:JSON.stringify(dataToSend),
            })
            .then(async (res) => {
                            const data = await res.json();
                            console.log(data);
                        })
                        .catch((error) => {
                            console.error('Error fetching data:', error);
                        });

            navigate("/etter")
        }



    return (
        <>

        <div className="logg-inn">
            <header className="logg-inn-header">
                <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
                <p> voksenopplæring </p>
                <p> søk </p>
                <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn, ta den bort </button>
        
            </header>
            <body className="logg-inn-body">

                <h1> logg inn her </h1>

                <div id='fornavn'>
                    <p> skriv inn brukernavnet ditt her </p>
                     <input type="text" value={username} onInput={e => setUsername(e.target.value)}/>
                </div>

                <div id='nummer'>
                    <p> skirv inn nummeret ditt her </p>
                     <input type="text" value={number} onInput={e => setNumber(e.target.value)}/>
                </div>

                <div id='e-post'>
                    <p> skriv inn e-posten din her</p>
                     <input type="text" value={epost} onInput={e => setEpost(e.target.value)}/>
                </div>

                <div id='passord'>
                    <p> skriv inn passordet ditt her </p>
                     <input type="text" value={password} onInput={e => setPassword(e.target.value)}/>
                </div>

                <div id='login-knapp'> 
                    <button onClick={() => handleSubmit()} id='login'> logg inn nå </button>
                </div>

            </body>

        </div>
        </>
    );

}
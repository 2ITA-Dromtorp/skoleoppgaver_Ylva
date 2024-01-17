import './insert.css';
import axios from "axios";
import React, { useState } from "react";


export default function Insert() {

    const [fornavn, setFornavn] = useState("");
    const [etternavn, setEtternavn] = useState("");
    const [klasse, setKlasse] = useState("");
    const [hobby, setHobby] = useState("");
    const [kjonn, setKjonn] = useState("");
    const [datamaskin, setDatamaskin] = useState("");


    function handleInsert(e) {
        e.preventDefault();
        /*const url = `http://localhost:3000/insertuser , ${fornavn}/${etternavn}/${klasse}/${hobby}/${kjonn}/${datamaskin}`;*/
        axios
            .post('http://localhost:3000/insertuser', {"Fornavn":fornavn, "Etternavn":etternavn, "Klasse":klasse, "Hobby":hobby, "Kjonn":kjonn, "DatamaskinID":datamaskin})
            .then(response => {
                console.log("Data inserted successfully");
                // You can perform any additional actions after the insertion is successful
                // For example, you can redirect the user to another page or display a success message
                //history.push('/'); (hva er det?)
                /*navigate('/'); */
            }).catch(error => console.log(error+ "neiiiiiii"));
    }


    return (
        <div>
            <h1>INSERT</h1>
            <div>
                <div className="table-container">
                    <form onSubmit={handleInsert} className="oewoew">

                    
                    <div className="text-box">
                        <p>Text here fornavn</p>
                        <input type='text' className='fornavn' /*value={fornavn}*/ onChange={(e) => setFornavn(e.target.value)} />
                    </div>
                    <div className="text-box">
                        <p>Text here etternavn</p>
                        <input type='text' className='etternavn' /*value={etternavn}*/ onChange={(e) => setEtternavn(e.target.value)} />
                    </div>
                    <div className="text-box">
                        <p>Text here klasse</p>
                        <input type='text' className='klasse' /*value={klasse}*/ onChange={(e) => setKlasse(e.target.value)} />
                    </div>
                    <div className="text-box">
                        <p>Text here hobby</p>
                        <input type='text' className='hobby' /*value={hobby}*/ onChange={(e) => setHobby(e.target.value)} />
                    </div>
                    <div className="text-box">
                        <p>Text here kjønn</p>
                        <input type='text' className='kjonn' /*value={kjonn}*/ onChange={(e) => setKjonn(e.target.value)} />
                    </div>
                    <div className="text-box">
                        <p>Text here datamaskin</p>
                        <input type='text' className='datamaskin' /*value={datamaskin}*/ onChange={(e) => setDatamaskin(e.target.value)} />
                    </div>

                    <div className="insert">
                        <button id='insertklikk'>INSERT</button>
                    </div>
                    </form>
                </div>
            </div>


            
        </div>
        
    );

    
}




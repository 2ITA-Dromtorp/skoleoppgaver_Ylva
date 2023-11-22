import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import profileIMG from './images/profile-image.jpg';
import json from './profiles';
import { useState, useEffect } from "react";

export default function Profile() {

    const { profile } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
            "navn" : "Ylva",
            "email" : "ylva@viken.no",
            "tlf" : "98128376",
            "klasse" : "2ITa"
        
    })
    
   
useEffect(() => {
    json.elever.map((elev, index) => {
        if (profile == elev.navn){
            setStudent(elev)
        }
    })

}, [])


    return (
        <div className="profil">
            <div className="profil-info">
            <h1> profilen til {profile} </h1>

                <div className="boks"> 
                    <h2> kontakt info til {profile}</h2>
                    <img src={profileIMG} alt="profil bilde"></img>
                        <p> Klasse: {student.klasse} </p>
                        <p> mail: {student.email}</p>
                        <p> tlf: {student.tlf} </p>
                    <button onClick={()=> {navigate('/')}}>Til hovedmeny</button>
                </div>
            </div>

        </div>

    )
}
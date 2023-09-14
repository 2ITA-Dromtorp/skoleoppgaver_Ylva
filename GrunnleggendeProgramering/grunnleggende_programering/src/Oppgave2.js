import { useState } from "react";

function DelOppgaveA() {

    let width = 4
    let length = 4 
    const areal = width+length
    console.log('oppgave 2a' +areal);

    return (
        <div className="deloppgave">
            <h2> Deloppgave a </h2>
            <p> Lag et program som regner ut arealet av et rektangel. Lengden er 8 og
                bredden er 8. Skriv dette som funksjon i python.  </p>
            <p> svar: let width = 4
                let length = 4 </p>
            <p> svar: se i console loggen nå </p>
                
        </div>
    )
}





function DeloppgaveB() {
    // dette er en funksjon som regner ut arealet av en trekant og et rektangel


    let length = 8
    let width = 8

   /* const arealRektangel = () => {
        return length * width;
    }*/

    return (
        <div className="deloppgave">
            <h2> Deloppgave b </h2>
            <p> Lag et program som regner ut arealet av en trekant.  {(length * width)/2} </p>
            <p> funksjon for å regne ut et rektangel: {length * width} </p>
            <p> svar:  </p>
            <p> svar: se i console loggen nå </p>
                
        </div>
    )
}


function DeloppgaveC () {

    const [width, setwidth] = useState(0)
    const [length, setlength] = useState(0)

    function updateWidth(event) {
        console.log(event.target.value);
        setwidth(event.target.value);

    }

    function updateLength(event) {
        console.log(event.target.value);
        setlength(event.target.value);

    }

    return (
        <div className="deloppgave">
            <h2> Deloppgave c </h2>
            <p> areal av en trekant: </p>
            <input type="number" value={width} onChange={updateWidth}/>
            <input type="number" value={length} onChange={updateLength}/>

            <h3> Arealet for rektangel: {width * length} </h3>
            <h3> Arealet for trekant: {(width * length)/2} </h3>

        </div>

    )
}


function DeloppgavePil () {


    return (
        <>
        <h1> deloppgave Pil </h1>
        <h2> lag to piler og tall i midten. tallet går opp når du trykker på pil opp, ned hvis du trykker på pil ned. </h2>


        </>
    )

}


function DeloppgaveD () {


}

function DeloppgaveE () {

    
}




function Oppgave2() {

    return (
        <>
        <h1> dette er oppgave 2 </h1>
        <DelOppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgavePil />
        <DeloppgaveD />
        <DeloppgaveE />

        </>
    ) 
}

export default Oppgave2;
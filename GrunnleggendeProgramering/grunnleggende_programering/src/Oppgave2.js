

function DelOppgaveA() {

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

let width = 4
let length = 4 
const areal = width+length
console.log('oppgave 2a' +areal);



function DelOppgaveA() {

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



function Oppgave2() {

    return (
        <>
        <h1> dette er oppgave 2 </h1>
        <DelOppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
        <DeloppgaveE />

        </>
    ) 
}

export default Oppgave2;
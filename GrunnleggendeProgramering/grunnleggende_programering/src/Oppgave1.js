

function DelOppgaveA() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave a </h2>
            <p> hva skriver du i javascript dersom du vil gi variabelen test verdien "8"? Hvilken datatype er dette? </p>
            <p> svar: let test = 8 </p>
            <p> svar: se console loggen nå {console.log(typeof(8))} </p>

            <>
            {console.log('let test = 8')}
            </>
        </div>
     
    )
}

function DeloppgaveB() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave b </h2>
            <p> Hva skriver du dersom du vil gi variabelen test verdien "testverdi"? Hvilken datatype er dette? </p>
            <p> svar: let test = testverdi </p>
            <p> svar: det er datatypen string/ test-string </p>

        </div>
    )
}

function DeloppgaveC() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave c </h2>
            <p> Hva skriver du dersom du vil regne ut 2 * 3 og sette resultatet inn i variabelen produkt?</p>
            <p> svar: let produkt = 2*3 </p>
            <p> svar: se i console loggen nå </p>

        </div>
    )
}
let produkt = 2*3
console.log(produkt);


function DeloppgaveD() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave d </h2>
            <p> Hva skriver du dersom du vil regne ut verdien av brøken 2/3 og sette resultatet inn i variabelen broek? 
                (Det kan være lurt å unngå skandinaviske bokstavar som æ, ø og å i variabelnavn.) </p>
            <p> svar: let broek = 2/3 </p>
            <p> svar: se i console loggen nå </p>

        </div>
    )
}

let broek = 2/3
console.log(broek);


function DeloppgaveE() {

    return (
        <div className="deloppgave">
            <h2> Deloppgave e </h2>
            <p> Lag et program der du tester om alle kommandoene over fungerer ved
                å bruke console.log() til å skrive ut innholdet av variablene. </p>
            <p> svar:  </p>
            <p> svar: se i console loggen nå </p>
                
        </div>
    )
}


function Oppgave1() {

    return (
        <>
        <h1> dette er oppgave 1 </h1>
        <DelOppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
        <DeloppgaveE />

        </>
    ) 
}

export default Oppgave1;

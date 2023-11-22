
import data from '../images/data.jpg';
import gym from '../images/gym.jpg';
import mat from '../images/mat.jpg';
import norsk from '../images/norsk-flagg.jpg';
import { useNavigate } from "react-router-dom";


export function home() {

    return (

        <div className="App">
          <header className="App-header">
            <button id='hjem'> drømtorp hjem </button>
            <p> voksenopplæring </p>
            <p> søk </p>
            <button id='logg-inn'> logg inn </button>
    
          </header>
          <body className='App-body'> 
            <div className='body-top'>
              <p> kurs: </p>
              <button id='meld-på'> meld deg på! </button>
            </div>
    
            <div className='kurs' id='data'>
              <div className='fag'>
                <h3> grunnleggende datakunnskap </h3>
                <p> lorum ipsum eatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                </p>
              </div>
    
              <div className='til-høyre'>
                <div className='bildeer'> 
                  <img src={data} className='bilde' alt='bilde av kode på en skjerm'/>
                </div>
                <div className='bilde-knapp'>
                  <button onClick={()=> {navigate('/data-kurs')}} className='les-mer'> les mer her </button>
                </div>
              </div>
            </div>
    
            <div className='kurs' id='norsk'>
              <div className='fag'>
                <h3> norsk </h3>
                <p> lorum ipsum eatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                </p>
              </div>
    
              <div className='til-høyre'>
                <div className='bildeer'> 
                  <img src={norsk} className='bilde' alt='bilde av kode på en skjerm'/>
                </div>
                <div className='bilde-knapp'>
                  <button className='les-mer'> les mer her </button>
                </div>
              </div>
            </div>
    
            <div className='kurs' id='mat'>
              <div className='fag'>
                <h3> heimkunnskap </h3>
                <p> lorum ipsum eatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                </p>
              </div>
    
              <div className='til-høyre'>
                <div className='bildeer'> 
                  <img src={mat} className='bilde' alt='bilde av kode på en skjerm'/>
                </div>
                <div className='bilde-knapp'>
                  <button className='les-mer'> les mer her </button>
                </div>
              </div>
              
            </div>
    
            <div className='kurs' id='gym'>
              <div className='fag'> 
                <h3> kroppsøving </h3>
                <p> lorum ipsum eatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                </p>
              </div>
    
              <div className='til-høyre'>
                <div className='bildeer'> 
                  <img src={gym} className='bilde' alt='bilde av kode på en skjerm'/>
                </div>
                <div className='bilde-knapp'>
                  <button className='les-mer'> les mer her </button>
                </div>
              </div>
            </div>
    
    
          </body>
    
          <footer> 
    
          </footer>
        </div>
      );


}

export default home; 
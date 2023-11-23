import '../App.css';
import data from '../images/data.jpg';
import gym from '../images/gym.jpg';
import mat from '../images/mat.jpg';
import norsk from '../images/norsk-flagg.jpg';
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';


export function Home() {


    const navigate = useNavigate();

    return (

        <div className="App">
          <header className="App-header">
            <button onClick={()=> {navigate('/home')}} id='hjem'> drømtorp hjem </button>
            <p> voksenopplæring </p>
            <p> søk </p>
            <button onClick={()=> {navigate('/logg-inn')}} id='sign-up'> logg inn </button>
    
          </header>

          <body className='App-body'> 
            <div className='body-top'>
              <h2> kurs: </h2>
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
                  <button onClick={()=> {navigate('/data-kurs')}} className='les-mer'> les mer og meld deg på </button>
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
                  <img src={norsk} className='bilde' alt='bilde av norsk flagg'/>
                </div>
                <div className='bilde-knapp'>
                  <button onClick={()=> {navigate('/norsk-kurs')}} className='les-mer'> les mer og meld deg på </button>
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
                  <img src={mat} className='bilde' alt='bilde av fem skåler med forskjellig sunn mat'/>
                </div>
                <div className='bilde-knapp'>
                  <button onClick={()=> {navigate('/mat-kurs')}} className='les-mer'> les mer og meld deg på </button>
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
                  <img src={gym} className='bilde' alt='bilde av treningssenter'/>
                </div>
                <div className='bilde-knapp'>
                  <button onClick={()=> {navigate('/gym-kurs')}} className='les-mer'> les mer og meld deg på </button>
                </div>
              </div>
            </div>
    
    
          </body>
    
          <footer> 
    
          </footer>
        </div>
      );


}

export default Home; 
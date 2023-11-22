import { json } from 'react-router-dom';
import Elev from './Elev';




export default function Klassekart() {

    function Randomize (){
        json.sort(function(){return 0.5 - Math.random()});
        document.getElementById("demo").innerHTML = json;
    }

    

    return (

        

        <div className='container'>
      <div className='teacher'>
        <h1> klassekart 2ITA </h1>
        <Elev name="lærer" />
        <button onClick={(Randomize)}>randomize</button>
        <p id='demo'></p>

      </div>


      <div className='first_row'>

          <Elev name="martin"/>
          <Elev name="mathias"/>
          <div className='gang'></div>
          <Elev name="kevin"/>
          <Elev name="noén André"/>
          <Elev name="andreas"/>

      </div>



      <div className='second_row'>
        
          <Elev name="falk"/>
          <Elev name="sander"/>
          <div className='gang'></div>
          <Elev name="Ylva"/>
          <Elev name="Vanessa"/>
          <Elev name="chen"/>
          
      </div>



      <div className='third_row'>
        
          <Elev name="tom"/>
          <Elev name="tom"/>
          <div className='gang'></div>
          <Elev name="tom"/>
          <Elev name="luz"/>
          <Elev name="frithjof"/>

      </div>

    </div>

        );
}
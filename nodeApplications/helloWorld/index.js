const express = require('express');
const app = express()
const port = 3000
var mysql = require('mysql2');
var cors = require('cors');

app.use(express.json());
//every cross-orgin request will be allowed
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'dromtorp1'
});




//api
app.get('/', (request, response) => {
  connection.connect( function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  }
  );

  connection.query('SELECT * from elev', function (error, results, fields) {
    if (error) throw error;
    console.log(typeof(results));
    console.log('The solution is: ', results);
    response.send(results)
  });
   

  
})

//update
app.put("/updateuser/:newhobby/:id", (request, response) => {
  // Endret fra app.get til app.put for å gjøre endringer i databasen.
  //http://localhost:3000/updateuser/Fotball/4
  
  let newhobby = request.params.newhobby;
  let id = request.params.id;
  console.log(newhobby);
  let sqlquery = 'UPDATE elev SET hobby=? WHERE ElevID=?';

  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
    if (error) throw error;
    response.send('If This works, great!');
  });
  
})

//delete
app.delete("/deleteuser/:id", (request, response) => {
  const sqlquery = "DELETE FROM elev WHERE ElevID = ?";
  const id = request.params.id;

  connection.query(sqlquery, [id], function (error, results, fields) {
    if (error) throw error;
    response.send('If This works, great!');
  });
  
})

//insert
app.post('/insertuser', (request, response) => {
  const sql = "INSERT INTO elev (Fornavn, Etternavn, Klasse, Hobby, Kjonn, DatamaskinID) values (?, ?, ?, ?, ?, ?)";
  console.log(request.body.Fornavn)
  const values = [
    request.body.Fornavn,
    request.body.Etternavn,
    parseInt(request.body.Klasse),
    request.body.Hobby,
    request.body.Kjonn,
    parseInt(request.body.DatamaskinID)
  ]
  connection.query(sql, values, (error, data) => {
    if(error) {
      console.log(error);
      return response.status(500).json({error: error.message});
    }
    else{
      return response.json(data);
    }
    
  })
})


//listen
//usikker
app.listen(port, () => {
  console.log(`ylvass app listening on port ${port}`)
})


const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql2');
var cors = require('cors');

//every cross-orgin request will be allowed
app.use(cors());

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'dromtorp'
});





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

app.listen(port, () => {
  console.log(`ylvass app listening on port ${port}`)
})


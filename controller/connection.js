var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studentdb'
})

connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connection established");
    }
})


module.exports=connection;
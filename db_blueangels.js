const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password : "",
    database:"db_fajar"

})

module.exports=db;

// db.connect(function(err){
//     if(err) throw err;
//     console.log('database terkoneksi')
// })
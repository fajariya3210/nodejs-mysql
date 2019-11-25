const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user :"root",
    password: "",
    database : "db_fajar"

});

// db.connect(function(err){
//     if(err) throw err;
//     console.log("Database terkoneksi")
// })

module.exports=db;

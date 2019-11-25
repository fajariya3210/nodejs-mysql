const db = require('./db_config');

db.connect(function(err){
    if(err) throw err;

    let sql = "SELECT * FROM tbl_user"

    db.query(sql, function(err, result){
        if(err) throw err;
        // console.log("-------------------------------");
        // console.log(result);
        console.log(`ID \t NAMA \t \t ALAMAT`)
        console.log("=========================================")
        result.forEach(tbl_user =>{
            console.log(`${tbl_user.id} \t ${tbl_user.nama} \t ${tbl_user.alamat}`)
        })

    })
})
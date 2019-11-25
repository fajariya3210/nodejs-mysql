const db = require('../db_blueangels');
const fs = require('fs');
const convertText = fs.createWriteStream('./output/result.txt')


db.connect(function(err){
    if(err) throw err;
    
    let tampil = `SELECT * from tbl_user`;

    db.query(tampil , function(err , result){
        if(err) throw err;
        convertText.write(`id \t nama \t\t alamat \n`)
        result.forEach(tbl_user =>{
            // console.log(tbl_user.id)
            convertText.write(`${tbl_user.id}  ${tbl_user.nama}  ${tbl_user.alamat} \n`);
            
        });
        console.log("data berhasil di export")
    }
)
});
const db = require('./db_config');

db.connect(function(err){
    if(err) throw err;
    
    // let sql = `INSERT INTO tbl_user(id, nama, alamat) value (2, 'arian','kudus')`;
    let sql = `INSERT INTO tbl_user(id, nama, alamat) values ?`;
    var dataUser = [
        [3, 'Jaka', 'Demak'],
        [4, 'Bara', "Jogja"],
        [5, 'Noel', 'Kudus'],
        [6, 'Brad', 'Semarang']
    ]
    db.query(sql, [dataUser] ,function(err, result){
        if(err) throw err;
        console.log('data berhasil di tambahkan')
    })
})
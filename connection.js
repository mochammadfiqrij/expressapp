var mysql = require ('mysql');

// create connection

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '12345678',
    database: 'belajar_db'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected");
});
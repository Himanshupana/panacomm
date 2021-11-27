const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:`panacomm`
})

con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('db connected 200');
    }
})

module.exports = con;
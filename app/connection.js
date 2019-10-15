require("dotenv").config()
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password:process.env.pass,
  database: "friends_db",
})

connection.connect(function(err){
  if(err) throw err;
})

module.exports = connection;
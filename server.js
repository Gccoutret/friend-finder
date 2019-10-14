require("dotenv").config()
var express = require("express");
var path = require("path");
var mysql = require("mysql");


var app = express();
var PORT = 3306;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password:process.env.pass,
  database: "friends_db"
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
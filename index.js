require('dotenv').config()
const bodyParser = require('body-parser')
const sql = require('mssql');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var dbconfig = {
    server: process.env.SERVER,
    database: process.env.DATABASE,
    user: process.env.PORT,
    password: process.env.PASSWORD,
    port: process.env.PORT,
}

var conn;
var req;




app.get('/', (req,res) => {
    conn = new sql.ConnectionPool(dbconfig);
    request = new sql.Request(conn);
    conn.connect( () => {
        request.query('SELECT * FROM table', (err) => {
            console.log(err)
            if (err) {
                res.send({'message': "Failed to Retrive Data"}).status(400);
            }
            else {
                res.send({'message': "Successfully Retrieved"}).status(200);
            }
        })
        conn.close();
    })
});

app.get('/:id', (req,res) => {
    conn = new sql.ConnectionPool(dbconfig);
    request = new sql.Request(conn);
});

app.post('/', (req,res) => {
    conn = new sql.ConnectionPool(dbconfig);
    req = new sql.Request(conn);
});

app.put('/', (req,res) => {
    conn = new sql.ConnectionPool(dbconfig);
    req = new sql.Request(conn);
});

app.delete('/', (req,res) => {
    conn = new sql.ConnectionPool(dbconfig);
    req = new sql.Request(conn);

    
});
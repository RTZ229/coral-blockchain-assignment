const express = require('express')
const mysql = require('mysql')
const path = require('path')

//path to the public directory
const publicDirectoryPath = path.join(__dirname, '../public')

// Create mysql connection
const db = mysql.createConnection({
    host : 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
    user : 'dummyUser',
    password : 'dummyUser01',
    database : 'db_intern'
})

//connect to mysql database
db.connect((err)=>{
    if(err) {
        console.log(err)
    }
    console.log('Mysql connected')
})


const app = express()

// making public directory available to the application
app.use(express.static(publicDirectoryPath))

// show tables
app.get('/show', (req, res)=>{
    let sql = 'SELECT* FROM userData'
    db.query(sql, (err, result)=>{
        if(err) console.log(err)
        console.log(result)
        res.send(result)
    })
})

//starting the server
app.listen('3000', ()=>{
    console.log('Server started on port 3000')
})
const express = require('express')
const mysql = require('mysql')

// Create connection

const db = mysql.createConnection({
    host : 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
    user : 'dummyUser',
    password : 'dummyUser01',
    database : 'db_intern'
})

//connect

db.connect((err)=>{
    if(err) {
        console.log(err)
    }
    console.log('Mysql connected')
})


const app = express()

// Create db
app.get('/createdb', (req, res)=>{
    let sql = 'SELECT* FROM userData'
    db.query(sql, (err, result)=>{
        if(err) console.log(err)
        console.log(result)
        res.send('database created...')
    })
})


app.listen('3000', ()=>{
    console.log('Server started on port 3000')
})
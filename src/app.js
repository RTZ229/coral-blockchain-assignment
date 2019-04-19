const express = require('express')
const mysql = require('mysql')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const path = require('path')

//path to the public directory
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')

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
        console.log("Mysql connection failed \n Error : "+JSON.stringify(err,undefined,2))
    }
    console.log('Mysql connected')
})


const app = express()

//Using body parser
app.use(bodyParser.urlencoded({extended:false}))

//setting up handlebars engines, views directory and registering partials for hbs
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// making public directory available to the application
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{
    res.render('index')
})

//taking an input from the html web form
app.post('/user_create',(req,res)=>{
    console.log('Trying to create new user...')
    const userName = req.body.create_user_name
    const emailId = req.body.create_email_id
    const phoneNumber = req.body.create_phone_number
    const password = req.body.create_password
    const dateTime = new Date()
    const queryString = "INSERT INTO userData (userName,emailId,phoneNo,password, dateTime) VALUES (?,?,?,?,?)"

    db.query(queryString,[userName,emailId,phoneNumber,password,dateTime],(err, results, fields)=>{
        if (err){
            console.log("failed to insert new user : "+err)
            res.sendStatus(500)
            return
        }
        console.log('Inserted a new user with id:', results.insertId)
        res.end()
    })
    
    console.log(userName,password,emailId,phoneNumber)
    res.end()
})

//Searching a record by email id

app.post('/user_search', (req,res)=>{
    const emailId = req.body.search_email_id
    const queryString = "SELECT * FROM userData WHERE emailId = ?"
    
    db.query(queryString,[emailId], (err,results,fields)=>{
        if(err) {
            console.log("failed to retrieve user data :"+err)
            res.sendStatus(500)
            return
        } else if(results.length === 0) {
            return res.send('No record found with the Email id provided!')
        }

        console.log(results)
        res.render('search-result', {
            userName: results[0].userName,
            password: results[0].password,
            emailId: results[0].emailId,
            phoneNumber: results[0].phoneNo
        })
    })
})

// show all records
app.get('/show', (req, res)=>{
    let sql = 'SELECT* FROM userData'
    db.query(sql, (err, rows, fields)=>{
        if(err) console.log(err)
        console.log(rows)
        res.send(rows)
    })
})


//starting the server
app.listen('3000', ()=>{
    console.log('Server started on port 3000')
})
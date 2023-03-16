const express = require('express')
require('dotenv').config()

const app = express()
const cors = require('cors')

const userRoute = require('./routes/user')
const dbConnection = require('./db/db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//----------database connection---------
dbConnection()

app.use('/',userRoute)

app.listen(process.env.PORT||7000,()=>console.log("Sever started"))
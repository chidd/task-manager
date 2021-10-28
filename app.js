const express = require('express')
const app = express()
const dotenv = require('dotenv')
const tasks = require('./routes/tasks')
const connectDB = require('./config/db')

// load env vars
dotenv.config({path: './config/config.env'});

connectDB()

const port = 3000

app.use('/api/v1/tasks',tasks)

app.listen(port, ()=>{
    console.log(`server running on port ${port}...`)
})
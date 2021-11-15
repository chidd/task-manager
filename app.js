const express = require('express')
const app = express()
const dotenv = require('dotenv')
const tasks = require('./routes/tasks')
const connectDB = require('./config/db')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
// load env vars
dotenv.config({path: './config/config.env'});


app.use(express.static('./public'))
app.use(express.json());

connectDB()

const port = process.env.PORT || 3000

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

app.listen(port, ()=>{
    console.log(`server running on port ${port}...`)
})
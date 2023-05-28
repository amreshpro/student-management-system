import express from 'express'
import * as dotenv from 'dotenv'
import {join} from'path'
import cors from 'cors'
import ConnectDatabase from './db/ConnnectDatabase.js';
import web from './routes/web.js'

// Load Environment Variables
dotenv.config();
const app = express()



// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/student",web)
// Static File
app.use(express.static('public'))

// app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000
const  dbURL = process.env.DATABASE_URL 

// Database Connection
ConnectDatabase(dbURL)






app.listen(port,()=>{
    console.log(`server starting at http://localhost:${port}`)
})
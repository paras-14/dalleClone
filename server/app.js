import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDB from './db/connect.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from "./routes/dalleRoutes.js"

// const router = require('./routes')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app is listening to port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
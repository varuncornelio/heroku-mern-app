import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import patientRoutes from './routes/patient.js'
//require("dotenv").config()
//import config from 'dotenv'
// ... other imports 
import path from 'path';




const app = express();
app.use(cors());



app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use('/patients',patientRoutes);


const CONNECTION_URL='mongodb+srv://corneto:14q82wgYEuKco8g5@merncluster.z2fus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> app.listen(PORT,()=>
    console.log('Connection establised and running on port:',PORT)
)).catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);
var __dirname = path.resolve();


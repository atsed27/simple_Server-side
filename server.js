const express = require('express');
const app =  express();
const mongoos = require('mongoose');
const router = require('./route/route');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

mongoos.connect(process.env.DATABASE_ACCES,()=>console.log('database connectd '));


app.use(express.json());
app.use(cors());
app.use('/app',router);

app.listen(5000,()=>console.log('server is ranning'));

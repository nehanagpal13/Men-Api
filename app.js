const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
require('./Config/db');


//mongodb+srv://MEN_Api_Neha:<password>@cluster0.dy4blsl.mongodb.net/?retryWrites=true&w=majority

//MEN_Api_Neha  , password: men1234

// mongoose.connect(process.env.DB_URI,
//     {
//     dbName: process.env.DB_NAME,
//     user : process.env.DB_USER,
//     pass: process.env.DB_PASS,
//     useNewUrlParser: true

// })
// .then(()=>{
//     console.log('Connected to Mongodb');

// }).catch((err)=>{
//     console.log(err.message);
// });

// const db=mongoose.connection;
// db.on('error',()=>{
//     console.log('Error occured from DB');

// });

// db.on('open',()=>{
//     console.log('Successfully accessed the database DB!');

// });


//MIDDLEWARES
app.use(require('./Routes'));

// app.use('',(req,res,next)=>{
//     console.log('API Middleware');
//     next();
// });

// app.use('/api',(req,res,next)=>{
//     console.log('API Middleware');
//     next();
// });

//ROUTE
// app.get('/',(req,res)=>{
//     res.send('app.js INDEX Page')
// });

// app.get('/api',(req,res)=>{
//     res.send('API Page')
// });

PORT= process.env.PORT || 4000;

app.listen(3000,()=>{
    console.log(`Listening on http://localhost:3000 port ${PORT}....`);
});


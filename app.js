const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');

require('dotenv').config();
require('./Config/db');




//MIDDLEWARES

app.use(cors());
//we set up the middleware to parse a body
//Body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require('./Routes'));



// app.use('',(req,res,next)=>{
//     console.log('API Middleware');
//     next();
// });

// app.use('/api',(req,res,next)=>{
//     console.log('API Middleware');
//     next();
// });


PORT= process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT} port ....`);
});


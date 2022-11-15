//setting up connection

//mongodb+srv://MEN_Api_Neha:<password>@cluster0.dy4blsl.mongodb.net/?retryWrites=true&w=majority

//MEN_Api_Neha  , password: men1234

const mongoose = require('mongoose');
const db=mongoose.connection;


mongoose.connect(process.env.DB_URI,
    {
    dbName: process.env.DB_NAME,
    user : process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true

})
.then(()=>{
    console.log('Connected to Mongodb');

}).catch((err)=>{
    console.log(err.message);
});


db.on('error',()=>{
    console.log('Error occured from DB');

});

db.on('open',()=>{
    console.log('Successfully accessed the database DB!');

});

module.exports = mongoose;
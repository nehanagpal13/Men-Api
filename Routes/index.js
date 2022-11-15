const router= require('express').Router();


//ROUTE
// router.get('/api',(req,res) => {
//     res.send('API Index')
// });
router.use('/api',require('./Api'));

router.get('/',(req,res) => {
    res.send('INDEX PAGE')
});  

module.exports= router;

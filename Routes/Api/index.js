const router= require('express').Router();

router.use('/users',require('./users'))

// router.use('/api',require('./Api'))
//ROUTE

router.get('/',(req,res) => {
    res.send('INDEX PAGE')
});

module.exports= router;
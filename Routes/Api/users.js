const router= require('express').Router();
const users_ctr= require('../../controllers/users');
//ROUTE

// router.get('/',(req,res) => {
//     res.send('INDEX PAGE')
// });


router.get('/',users_ctr.index);


module.exports= router;
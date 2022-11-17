const router= require('express').Router();
const users_ctr= require('../../controllers/users');

//ROUTE

// router.get('/',(req,res) => {
//     res.send('INDEX PAGE')
// });

//CRUD

//CREATE
//endpoint 
//http://localhost:3000/api/users
router.post('/',users_ctr.createUser);

//READ
router.get('/',users_ctr.listAll);
router.get('/:id',users_ctr.singleUser);

//UPDATE
router.patch('/:id',users_ctr.updateUser);

//DELETE
router.delete('/',users_ctr.deleteUser);




module.exports= router;
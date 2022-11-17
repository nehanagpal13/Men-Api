const User = require('../models/users');

exports.index= (req, res)=>{
    res.send("Users Index")
}

//CRUD OPERATIONS
//----------------------------------------------------------------
//CREATE

exports.createUser=async(req,res)=>{
    const user= new User({
        /* name:'Chloe',
        title:'The Detective',
        bio:'Lucifers Partner',

        we need a body parser to take parameters */

        name:req.body.name,
        title:req.body.title,
        bio:req.body.bio,
    });
     try{
        const createUser = await user.save();
        if(!createUser){
            res.status(400).json({msg: "Error in creating a user!"})
        }
        else{
            res.status(201).json(user);
        }
        
     }catch(err){
        res.status(400).json({msg: err});
     };


   /*  saving data to our database
    user.save().then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(400).json({msg:err});
    });

    res.status(200).json(user); */
};


//----------------------------------------------------------------
//READ
exports.listAll = async (req, res)=>{
    try{
        const query = await User.find();
        const query1 = await User.find().count();
        

        if(!query){
            res.status(400).json({msg: "Error in Finding the user!"})
        }
        else{
            res.status(200).json(query);
            console.log("Count of users: "+query1)
        }
        
     }catch(err){
        res.status(400).json({msg: err});
     };

};

exports.singleUser = async (req,res)=>{
    try{
        const query = await User.findById(req.params.id);
        if(!query){
            res.status(400).json({msg:"Invalid User"});
        }
        else{
            res.status(200).json(query);
        }
    }
    catch(err){
        res.status(400).json({msg:err});
    }
};

//----------------------------------------------------------------
//UPDATE

// to update we use patch, so you can update single field as well eg- Name Only
exports.updateUser = async (req, res)=>{
    try{
        const query = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },
            //to send the updated data in first go, else we have to refresh 2 times.
            {
                new:true
            }
            );
        if(!query){
            res.status(400).json({msg:"Invalid User"});
        }
        else{
            res.status(200).json(query);
        }
    }
    catch(err){
        res.status(400).json({msg:err});
    }

};

//----------------------------------------------------------------
//DELETE
exports.deleteUser = async (req, res)=>{
    try{
        if(req.body.id){
            const query = await User.findByIdAndDelete(req.body.id);
            if(!query){
                res.status(400).json({msg:"Invalid User"});
            }          
            else
            {res.status(200).json(query);}
        }

        else{
            res.status(400).json({msg:"Invalid Request"});
        }
    }
    catch(err){
        res.status(400).json({msg:err});
    }


};




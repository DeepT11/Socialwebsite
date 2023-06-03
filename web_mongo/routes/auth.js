const router = require('express').Router();
const User= require('../models/User');
const bcrypt= require('bcrypt');

// router.get('/', (req,res)=>{
// res.send("hey it is auth routes")
// })


//REGISTER
// router.get("/register",async(req,res)=>{
//     const user = await new User({
//         username: "john",
//         email: "john@example.com",
//         password:"123456"
//     })
//      //since writing in the database here,so await.
// await user.save();
// res.send("ok");
// });

router.post('/register',async(req,res)=>{
     
     try{
        //generate password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password,salt);
        //create user
        const newUser = await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedpassword
         })
         //save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
     }catch(err){
        console.log(err)
     }
});


//LOGIN
router.post('/login',async (req,res)=>{
   try{
      const user = await User.findOne({email:req.body.email});
      !user && res.status(404).send("user not found");


      const validPassword = await bcrypt.compare(req.body.password,user.password);
      !validPassword && res.status(404).json("wrong password");

   }catch(err){
      console.log(err);
   }
})


module.exports = router
const express = require('express');
//create application
const app=express();
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute=require('./routes/users');
const authRoute=require('./routes/auth');
const postRoute=require('./routes/posts');



dotenv.config();


//create connection
//mongoose dosent allow callbacks now
mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Connected to Mongoose');
})
.catch((error) => {
  console.error('Error connecting to Mongoose:', error);
});


//middlewares
//middleware in nodejs is a function that will have access for requesting an obj,responding to an obj,
//and moving to next middleware func in app req-res cycle.
///express.json() is body parser
app.use(express.json());
app.use(helmet());
app.use(morgan("comman"));

// app.get("/",(req,res) => {
//   res.send("Welcome to home page")
// })

// app.get("/users",(req,res) => {
//   res.send("Welcome to users page")
// })

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)




app.listen(8800,()=>{
    console.log('Backend server is running');

})
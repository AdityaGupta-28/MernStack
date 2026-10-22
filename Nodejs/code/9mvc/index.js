const express = require('express');
// const {User:Usermodel} = require('./model/Usermodel');
const { ConnectDB } = require('./connection');
const userRoute = require('./routes/userRoute');
// const fs = require('fs');
const {logReqRes} = require('./middleware/logg');


// const { Usermodel } = require('./model/Usermodel');
// But your latest model file exports:
// module.exports = { User };
// #####  The exported property is named User, not Usermodel. JavaScript destructuring matches property names exactly.
// 1. Fix the import
// Change this:
// const { Usermodel } = require('./model/Usermodel');
// To this:
// const { User: Usermodel } = require('./model/Usermodel');

const app = express();

/// Connecting Database
ConnectDB('mongodb://127.0.0.1:27017/Nodejs')
.then(()=>console.log("Monogdb Connected"));


// mongoose.connect("mongodb://127.0.0.1:27017/Nodejs")
// .then(()=>console.log("Connected to mongoDB"))
// .catch((err)=>console.log("Error occured: ",err));

//// Middlewares 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(logReqRes('logg.txt'));
/// loggMiddleware
// app.use((req,res,next)=>{
//   fs.appendFile('logg.txt','\n ${req.method} ${Date.now()}\n',(err,data)=>{
//     console.log("Log created");
//     next();
//   });
// });

/// Routes
app.use('/users',userRoute);
// .get(async(req,res)=>{
// try{
// const users_data = await Usermodel.find({});
//  const html =` 
//  <ul>
//   ${users_data.map(x=>{return `<li>${x.firstName}: ${req.method}</li>`}).join(" ")}
//   </ul> `

//   return res.status(200).send(html);
// }
// catch(err){
//     console.log(err);
//     return res.status(500).send("Error in fetching data");
// }
// })
// .post(async(req,res)=>{
//     try{
//     const {firstName,email,gender} = req.body;
//     if(!firstName || !email || !gender){
//      return  res.status(400).end("All fields are required");
//     }
//     const user = {firstName:firstName, email:email, gender:gender};
//     await Usermodel.create(user);
//   return res.status(201).send("User created Successfully");
// }
// catch(err){
//     console.log(err);
//     return res.status(500).send("Error creating user");
// }
// });



app.listen(8000,()=>{console.log("Server Running on port 8000")});
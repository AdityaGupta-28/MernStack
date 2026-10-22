const express = require('express');
const router = express.Router();
const {User:Usermodel} = require('../model/Usermodel');

router.get('/',async(req,res)=>{
    try{
const users_data = await Usermodel.find({});
 const html =` 
 <ul>
  ${users_data.map(x=>{return `<li>${x.firstName}: ${req.method}</li>`}).join(" ")}
  </ul> `

  return res.status(200).send(html);
  }
catch(err){
    console.log(err);
    return res.status(500).send("Error in fetching data");
}
});

router.post('/',async(req,res)=>{
    try{
    const {firstName,email,gender} = req.body;
    if(!firstName || !email || !gender){
     return  res.status(400).end("All fields are required");
    }
    const user = {firstName:firstName, email:email, gender:gender};
    await Usermodel.create(user);
  return res.status(201).send("User created Successfully");
}
catch(err){
    console.log(err);
    return res.status(500).send("Error creating user");
}
});

router
.route('/:id')
.get(async(req,res)=>{
const user = await Usermodel.findById(req.params.id);
if(!user){return res.status(404).json({Error:'Data not found'})};
return res.json(user);
})
.patch(async(req,res)=>{
  await Usermodel.findByIdAndUpdate(req.params.id, {firstName:'modified'});
  return res.json({status:'success'});
})
.delete(async(req,res)=>{
 await Usermodel.findByIdAndDelete(req.params.id);
 return res.json({status:'deleted'});
});


module.exports = router;
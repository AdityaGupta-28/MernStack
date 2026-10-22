const mongoose = require('mongoose');
const express = require('express');


const app = express();
app.use(express.urlencoded({extended:false}));

/// connecting to database
  mongoose.connect('mongodb://127.0.0.1:27017/Nodejs')
    .then(()=>{console.log("connected to mongodb")})
    .catch((err)=>{console.log("error occurred: ",err)});

//// Defining user schema
const userSchema = new mongoose.Schema({
  firstName:{type:String, required:true},
  lastName:{type:String},
  email:{type:String, required:true, unique:true},
  gender:{type:String, required:true},
},{timestamps:true});


/// Making user model  
//###  mongoose.model(modelName, schema, collectionName);
// what happens if we not provide the third argument 
// const User = mongoose.model("user", userSchema);
// Mongoose normally pluralizes the model name, so it uses the MongoDB collection named users.

const User = mongoose.model("model_name",userSchema,'users');  /// now using User object/ class we can interact with mongodb, 
    // here if i write user then due to default pularisation it converted to users,
    // In Mongoose, a Model is a JavaScript interface that allows you to interact with a MongoDB collection — to create, read, update, and delete documents.
    
//     4. Important interview point
// Does mongoose.model() immediately create a collection in MongoDB?
// Not necessarily. It registers the model in Mongoose. The collection is generally created when an operation that writes data occurs, or when you explicitly create it.
// Also, Mongoose normally converts the model name "user" to the collection name users. You can specify a custom collection name:
// const User = mongoose.model("user",userSchema, "my_users" );
// Here, the third argument explicitly sets the collection name to my_users.


let allDbUsers;

app.get('/api/users',(req,res)=>{
    return res.json(allDbUsers);
});

app.get('/users', async(req,res)=>{
    allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map((x)=>`<li>${x.firstName}</li>`).join("")}
    </ul>`
    return res.send(html);
});

app.post('/users', async(req,res)=>{
 const body = req.body;
 if(!body || !body.firstName || !body.lastName || !body.email || !body.gender){
    return res.status(400).send("All fields are required");
 }
 const result = await User.create({
    firstName:body.firstName,
    lastName:body.lastName,
    email: body.email,
    gender: body.gender
 });

 console.log(result);
 return res.status(201).json({"msg":"success"});

});

app.listen(8000,(req,res)=>{console.log('Server Running on port 8000')});
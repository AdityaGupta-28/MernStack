const http = require('http');
const express = require('express');
const app = express();

 function myHandler(req,res){

}
// const myServer = http.createServer(myHandler);
// const myServer = http.createServer(app);


app.get('/',(req,res)=>{
 return res.send("Home page");
});

app.get('/about',(req,res)=>{return res.send(`Hello from about page ${req.query.name}`)});
app.post('/signup',(req,res)=>{return res.send("Registered")});

// myServer.listen(8000,(req,res)=>{console.log("Server running on port 8000")});
app.listen(8000,(req,res)=>{console.log("Server running on port 8000")});
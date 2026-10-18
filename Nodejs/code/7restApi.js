const express = require("express");
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 8000;


// Middleware is a function that executes between receiving an HTTP request and sending an HTTP response.
// It can inspect the request, modify the request or response, execute logic, end the response, or pass control to the next middleware.

app.use(express.urlencoded({extended:false})); 
// • Purpose: Built-in Express middleware that parses HTML form submissions (application/x-www-form-urlencoded).
// ### It parses the raw URL-encoded text into a standard JavaScript object.
// • Result: Populates req.body with the submitted form data so you can access it in your routes.
// • extended: false: Uses Node's native querystring library. It only parses simple key-value pairs (strings/arrays) and forbids deeply nested objects.
// • Alternative (extended: true): Uses the qs library to allow complex, nested objects (e.g., user[name][first]=John).

// Custom MiddleWare
app.use((req,res,next)=>{
fs.appendFile('middlewarelog.txt',`${Date.now()}: ${req.ip} : ${req.path}\n`,(err,Data)=>{
  console.log("MiddleWare 1");
  next();
});
});

app.use((req,res,next)=>{
console.log("MiddleWare 2");
req.name = "Aditya";
next();
});

// Routes
app.get('/users',(req,res)=>{
  console.log(req.name);
  const html = `
  <ul>
   ${users.map((x)=>`<li>${x.first_name}</li>`).join("")}
  </ul>
`
return res.send(html);  /// server side rendering html is sent 
});

app.get('/api/users',(req,res)=>{
  res.setHeader("X-MyName","Aditya");   /// custome header setting
    return res.json(users);   /// json is send     
});

// Dynamic Path parameter 
// app.get("/api/users/:id",(req,res)=>{
//    const id = Number(req.params.id);
//    const user = users.find(user=>user.id===id);
//    return res.json(user);
// });

// app.put("/api/users/:id",(req,res)=>{
//   return res.json({"status":"pending"});
// });

// Above we see that we need to write the same route again and again so we can simplify it 
app.post("/api/users",(req,res)=>{
    const body = req.body;
     users.push({...body, id:users.length+1});
    //  json.stringify -> to convert a JavaScript object or value into a JSON string.
    // a JavaScript (JS) object is a live data structure living in your computer's memory,
    //  while a JSON string is just text format used to transport or store that data.
    // js object -> { age: 25 }
    // json string -> {"age": 25}
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        return res.json({"status":"success", "id":users.length});
    });
 });

app.route('/api/users/:id')
.get((req,res)=>{
  const id = Number(req.params.id);
   const user = users.find(user=>user.id===id);
   return res.json(user);
 })
.put((req,res)=>{return res.json({"status":"pending"});
})
.delete((req,res)=>{return res.send("Deleted")
});


app.listen(port,()=>{console.log("Server running on port "+port)});
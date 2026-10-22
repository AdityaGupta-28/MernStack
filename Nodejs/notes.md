 ### Whenever we make changes to our server then we need to restart it again so to solve this issue we can use nodemon 
 so it's a package which automatically restart the server when changes are made and save it, to install it write npm install nodemon and in 
 package.json write start script to nodemon index.js from node index.js or simply use it in terminal to run particular file.

 ### Arrow function general 
 users_data.map(x => {
    `<li>${firstName}: ${req.method}</li>`
})
There are two problems:
- firstName is not defined. You should use x.firstName.
- Curly braces create a function body, so you must explicitly return the HTML string. Otherwise, map() produces an array of undefined values.

##### 1st video(introduction )
1.> Javascript is dynamically typed, high level programming language, initially it's name was liveScript but it's name change to js to gain the popularity over java, despite both are not revelant to each other. and program written in js are know as script;

2.Node js is a runtime environment that allows javascript to run outside the browser as initially javascript was run by js engines which are found in the browsers only.

3.> Rayan dahl is the developer of node js is developed node js by embedding js engine into the c++ engine, js can interact to native machines due to c++ and we can create webservers in js language;

4.> Some famous Engines used in browsers:
  v8 engine = chrome
  spiderMonkey = firefox;
  apple js engine = safari

5.> But node js have some missing features like features related to dom (ie. window,alert, ui related functionalities );

 #### 2nd video (installation )

1.> LTS versions(Long term support) are starts with even numbers and Beta versions starts with odd, we always use lts version for 
production and when beta versions get stable with then that versions are converted to lts by assigning even nearest version no.

2.> node --version is used to check version of node.
3.> node command is used to switch to interactive terminal.
4.> npm (node package manager) that is installed with node and is used to manage dependencies and run the project;

#### 3rd video (project template creation and runing)
1.> npm init command is used to create the template of the project which generally contains configuration file named as 
package.json which contains the meta data of project like description, license, author, dependencies and script to run and build;

2.> we use command node file_name to run the file or we may skip extension of file as node can only run js file;

3.> we can also run the file using script like npm start;

#### 4th video (Modules in node)(divides code base into small modules)
1. so to use a function that is defined in other file we need to import it using require function and the syntax is:- 
  const math = require('./path_of_file');
  or const {add, sub} = require('./math'); //destructuring

2. And we also need to export that function of module using the following syntaxes:-
   
   module.exports = add;        // we can only write one export for this as it overrides the previous one so for multiple function we can write :-
   module.exports = {add,sub}; we can also write it {addfun:add, subfun:sub};

3. Another way to export is using anonymous function 
 exports.add = (a,b)=>a+b;
 exports.sub = (a,b)=>a-b;      // here we can write multiple exports but not in the above case that is module.exports

4. To import built-in modules only write module name no need to write path like require('https');

5. Example:  
      math.js
          function add(a,b){
          return a+b;
          }
          
           // exports.add=(a,b)=>a+b;  /// another way to define and export the function

          function sub(a,b){
            return a-b;
          }
          module.exports = {add,sub};

      main.js
      const math = require("./math); or const {add,sub} = require('./math');

      console.log(math.add(2,3)); // simple use add(2,3) if destructuring is used;


#### 5th Video (file handling)
1. we have two modes of file handling one is synchronous and another is Asynchornous;
 ex- const fs = require('fs');
 fs.writeFileSync('./test.txt',"Hello world"); // it creates file if not exist and overwrites the content if exists

 fs.writeFile('./text.txt',"hey, hii", (err)=>{   
  if(err){console.log(err)};
  else{console.log("success")};
 });

 const res = fs.readFileSync('./test.txt','utf-8');  /// it returns value while Async doesn't, that expects a callback func
 console.log(res);

 fs.readFileSync('./test.txt','utf-8',(err,result)=>{
 if(err){console.log(err)};
 else{console.log(result)};
 });

2. we have other methods like:- 
  fs.appendFileSync('./test.txt',new Date().getDate().toLocalString());

  fs.cpSync('./test.txt','./copy.txt');

  fs.unlinkSync('./copy.txt');

  console.log(fs.statSync('./test.txt'));

  fs.mkdirSync('mydocs/a/b',{recursive:true}); /// it will create nested folders dirr/a/b
  fs.rmSync('mydocs/a/b',{recursive:true,force:true}); // it will delete only b folder or we can say specific folder
  fs.rmSync('mydocs',{recursive:true});

#### 6th Video(node architecture)
const os = require('os');
console.log(os.cpus().length); /// give the details of number of cpus of threads of server or system on which the code is running

Libuv Library: A C-based library that powers the core asynchronous capabilities of Node.js. It manages the Event Loop and handles system-level multi-worker

process.env.UV_THREADPOOL_SIZE = 6 // by using this we can change the number of threads and it can be max to no. of threads in our system.

//// need to clear the node js architecture

#### 7th Video (creating server)
1. We can create server using function http.createServer() which is a function of http built-in module and it requires a
callback function know as requestHandler to handle the incoming requestion on this server and that callback function uses 
parameters req, and res.

2. whenever we are making request two requests are made so the first request is made by the user and the second request is made
by browser to get the favicon that's why we are seeing two outputs in the console.log for each request;

3. And we register a port to listen for the server;

### 8th video url(uniform resource locator) (5server.js)
1. Example URL:
https://www.example.com:8080/products?id=10#reviews
    Part	            Example
1. Protocol 	        https://
2. Subdomain	           www
3. Domain Name	        example
4. Top-Level Domain(TLD) 	.com
5. Port             	:8080
6. Path	           /products
7. Query String	    ?id=10
8. Fragment	      #reviews
   Hostname      www.example.com

 2. To use url we first need to install it using npm install url - then this will install it and store in node modules(stores external downloaded dependencies), if
    we uninstall the node modules file then we simply need to run command npm install this will install all the required deleted dependecies as during installation their version are mentioned in the dependencies of package.json.

  3. url.parse(req.url,true) - > If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string. Default: false. 
  (simply converts string to object) 

4. so we have url first cosiste of protocol, then domain followed by path and then query starts with ?

## 9th video Http Methods()
 GET -> To get data from server and it is default method
 POST -> To send the data to server
 PUT -> Replaces the entire resource with a new version
- Requires sending the entire updated resource, even if only a few fields have changed
- Can be thought of as "update and replace"
PATCH ->  Updates only the specified fields, leaving others unchanged
- Only requires sending the changed fields
- Can be thought of as "update and merge"
DELETE
OPTION


#### 10th video EXpress.js (6express.js)
1. It is a framework for node js which make the development easy.( it is unopinionated)
2. Make the code modular and clean , easy to implement and we not need to take care of importing packages like http, url, fs 
express is going to do it itself.

Routing refers to determining how an application responds to a client request to a particular endpoint, 
specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are executed when the route is matched.
Route definition takes the following structure:

app.METHOD(PATH,HANDLER);
Where:

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.

### 11th video (versioning)
1. Versioning is the process of assigning identifiers to different releases of software or APIs so developers can track changes, manage compatibility, and maintain older versions when necessary.

Example: 2.4.3
Part	Meaning	Example
MAJOR (2)	Breaking changes	2.4.3 → 3.0.0
MINOR (4)	New features without breaking existing functionality	2.4.3 → 2.5.0
PATCH (3)	Bug fixes without breaking existing functionality	2.4.3 → 2.4.4

2. To install specific version using terminal the command is -> npm i express@4.9.3

3.  ^4.18.2  that means version should be strictly less then <5.0.0 (don't do major updates)
  ^ — Install all Recommended and Minor Fixes Automatically.
  ~ - Install only Patch fixes
  ~ 4.18.1
  ~ 4.18.2
  ~ 4.18.3  
~ 4.19.1 No 

## 12th video(RestAPI)
1. RestFull api(Representational stateless) - It follows client - server architecture and it is stateless that means it don't 
maintain the previous state of request and not related to other requests;
2. It defines Standards to enable communication between client and server.
3. Always respect http methods

### 13th video( Building rest api)
const express = require("express");
const users = require('./MOCK_DATA (1).json');

const app = express();
const port = 8000;

// Routes
app.get('/users',(req,res)=>{
  const html = `
  <ul>
   ${users.map((x)=>`<li>${x.first_name}</li>`).join("")}
  </ul>
`
return res.send(html);  /// server side rendering html is sent 
})

app.get('/api/users',(req,res)=>{
    return res.json(users);   /// json is send 
     
})

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


### 14th video (postman for restApi)
1. testing api using postman 

### 15th video(middleware ) 7restApi.js
1. Middleware is a function that executes between receiving an HTTP request and sending an HTTP response.
   It can inspect the request, modify the request or response, execute logic, end the response, or pass control to the next middleware.

2. app.use(express.urlencoded({extended:false})); 
// • Purpose: Built-in Express middleware that parses HTML form submissions (application/x-www-form-urlencoded).
// ### It parses the raw URL-encoded text into a standard JavaScript object.
// • Result: Populates req.body with the submitted form data so you can access it in your routes.
// • extended: false: Uses Node's native querystring library. It only parses simple key-value pairs (strings/arrays) and forbids deeply nested objects.
// • Alternative (extended: true): Uses the qs library to allow complex, nested objects (e.g., user[name][first]=John).
 
3.   //  json.stringify -> to convert a JavaScript object or value into a JSON string.
    // a JavaScript (JS) object is a live data structure living in your computer's memory,
    //  while a JSON string is just text format used to transport or store that data.
    // js object -> { age: 25 }
    // json string -> {"age": 25}


### 16th video(http header)
1. HTTP Headers are an important part of the API request and response as they represent
the meta-data associated with the API request and response.
Headers carry information for The request and Response Body.

2. Accept = */* -> that means accept any type of data(content-type data acceptance);
3. Alway add X- at begining of custome headers, it is used to identify that it is a custome header.
4. we can set header using req/res.setHeader("X-MyName" , "Aditya");


### 17th video(status code)
1. HTTP response status codes indicate whether a specific HTTP request has been
successfully completed. Responses are grouped in five classes:
1. Informational responses (100- 199)
2. Successful responses (200 - 299)
3. Redirection messages (300 399)
4. Client error responses (400 - 499)
5. Server error responses (500 - 599)

### return res.status(200).json(users);

200 - ok;
201 - created;
202 - Accepted
204 - No content
205 - Reset Content

300 - 

400 - Bad Request  (some data may be missing)
401 - Unauthorized
402 - Payment Required
403 - Forbidden
404 - Not found (we may request wrong route which not exist)

500 - Internal Server Error
501 - Not Implemented
502 - Bad GateWay
503 - Service Unavailable

### 18th Video(Mongodb)
1. mongosh - The MongoDB Shell (mongosh) is the official, modern JavaScript and Node.js-based command-line interface (CLI) used to connect to, query, and administer MongoDB databases. It replaces the legacy mongo shell.(is a cli used to connect to mongodb);

2. some commands
> show dbs
> use <db name>
> show collections
> db.coll_name.find()
> db.coll_name.insert()

## 19th video(connection nodejs with mongodb)
1. first we need to install monogosh package -> npm install mongosh
2. then we need to define schema - 
  const userSchema = new mongoose.Schema({
  firstName:{type:String, required:true,},
  lastName: {type:String,},
  email:{type:String, required:true, unique:true,},
 
  },{timestamp:true});
3. Afterward we need to make model using   
 const User =  mongoose.model('user',userSchema); // using this User we can interact with mongodb
but we first need to connect with mongodb

4. ## connecting mongodb 
mongoose
. connect ("mongodb: // 127.0.0.1: 27Ø17/youtube—app—1" )
. then(() => console. log ("MongoDB Connected"))
. catch( (err) => console. log ("Mongo Error",err));

5. /// Making user model  
const User = mongoose.model("users",userSchema);  /// now using User object/ class we can interact with mongodb, 
    // here if i write user then due to default pularisation it converted to users,
    // In Mongoose, a Model is a JavaScript interface that allows you to interact with a MongoDB collection — to create, read, update, and delete documents.
    
##  Important interview point
// Does mongoose.model() immediately create a collection in MongoDB?
// Not necessarily. It registers the model in Mongoose. The collection is generally created when an operation that writes data occurs, or when you explicitly create it.
// Also, Mongoose normally converts the model name "user" to the collection name users. You can specify a custom collection name:
// const User = mongoose.model( "user",  userSchema,"my_users" );
// Here, the third argument explicitly sets the collection name to my_users.

###  mongoose.model(modelName, schema, collectionName);
// what happens if we not provide the third argument 
// const User = mongoose.model("user", userSchema);
// Mongoose normally pluralizes the model name, so it uses the MongoDB collection named users.





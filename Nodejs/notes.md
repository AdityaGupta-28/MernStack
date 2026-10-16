##### 1st video(introduction )
1.> Javascript is dynamically typed, high level programming language, initially it's name was liveScript but it's name change to js to gain the popularity over java, despite both are not revelant to each other. and program written in js are know as script;

2.Node js is a runtime environment that allows javascript to run outside the browser as initially javascript was run by js engines which are found in the browsers only.

3.> Rayan dahl is the developer of node js is developed node js by embedding js engin into the c++ engine, js can interact to native machines due to c++ and we can create webservers in js language;

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

### 8th video url(uniform resource locator)
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


#### 10th video EXpress.js
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

## 12th video(API)



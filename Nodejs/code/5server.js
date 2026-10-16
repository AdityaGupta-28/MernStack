const http  = require('http');
const fs = require('fs');
const url = require('url');


function Handler(req,res){
if(req.url === '/favicon.ico') return res.end();
const log = `${Date.now()} :  ${req.method} : New request Received\n`;
fs.appendFile('log.txt',log,(err,data)=>{
 const myUrl = url.parse(req.url,true);

 switch(myUrl.pathname){
    case '/': 
     res.end("Home Page");
            break;
    case '/about':
        const user = myUrl.query.myname;
       res.end("hello "+ user);
       break;
   case '/search':
        const search = myUrl.query.search_query; // localhost:8000/search?search_query=javascript+tic+tac+toe
        res.end(`Here is response for ${search}`);
        break;
    case '/signup':
        if(req.method==='GET')res.end("This is signup form");
        else if(req.method==='POST'){
              res.end('Success');
        }
        break;
    default: res.end("Not found");
 }
});
};

const myServer = http.createServer(Handler);

// const myServer = http.createServer((req,res)=>{
//     ///// server creation and log creation 
// //     const log = `${Date.now()}:New Request received -${req.url}\n`;
// //    fs.appendFile('log.txt',log,(err,data)=>{
// //     switch(req.url){
// //         case '/': res.end('Home page');
// //                   break;
// //         case '/about': res.end('I am Aditya');
// //                        break;
// //         default: res.end("404 Not Found");
// //     }
// //    });

// ////// url 

// //  const myUrl = url.parse(req.url,true);// If true, the query property will always be set to an object returned by the querystring module's
// //  // parse() method. If false, the query property on the returned URL object will be an unparsed, undecoded string. Default: false.
// // switch(myUrl.pathname){
// //     case '/': res.end("Home page");
// //                  break;
// //     case '/about':
// //         const userName = myUrl.query.myname;
// //         res.end(`hii ${userName}`);
// //          break;
// //     case '/search':
// //         const search = myUrl.query.search_query;  // http://clocalhost:8000/search?search_query=javascript+tic+tac+toe
// //         res.end(`Here is your result for ${search}`);
// //         break;
// //   default: res.end("Not found");
    
// // }

  
// });

myServer.listen(8000,()=>{console.log("Server Started")});

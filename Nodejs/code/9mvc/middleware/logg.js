const fs = require('fs');

function logReqRes(filename){
    return  (req,res,next)=>{fs.appendFile(filename,`\n ${req.method} ${Date.now()}\n`,(err,data)=>{ /// called closure function
    console.log("Log created");
    next();
  });
};
}
module.exports = {logReqRes};



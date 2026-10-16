const fs = require('fs');

fs.writeFileSync('synctest.txt',"This is sync test text file");
fs.writeFile('Asynctest.txt','This is async text text file',(err,result)=>{});

fs.readFile('synctest.txt','utf-8',(err,result)=>{console.log(result);});

fs.appendFileSync('synctest.txt',`${new Date().getDate().toLocaleString()}\n`);
fs.appendFileSync('synctest.txt',`${Date.now()}\n`)

fs.mkdirSync('mydocs/a/b',{recursive:true}); // used to create nested dir if remove recursive then single dir will form
fs.rmSync('mydocs/a/b',{recursive:true,force:true}); // it will delete only b folder or we can say specific folder
fs.rmSync('mydocs',{recursive:true});
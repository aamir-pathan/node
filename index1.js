//11 to 20 topics

//craete simple api
//const http = require('http');
//http.createServer((req,resp)=>{
//   resp.writeHead(200,{'Content-Type':'application/json'});
////   resp.writeHead(200,{'Content-Type':'text/html'});
//   resp.write(JSON.stringify({name:'aamir pathan dev DGD ISS',email:'aamirpathan@gmail.com'}));
//   resp.end();
//}).listen(4600);
//

//craete api with another file
//const httpp = require('http');
//const data = require('./datas.js');
//httpp.createServer((req,res)=>{
//    res.writeHead(201,{'Content-Type':'application/json'});
//    res.write(JSON.stringify(data));
//    res.end();
//}).listen(4601);

//input from console
//const fs = require('fs');
//const input = process.argv;
//
//if(input[2] == 'add'){
//    fs.writeFileSync(input[3],input[4]);
//}else if(input[2] == 'remove' ){
//    fs.unlinkSync(input[3]);
//}else console.log('sorrry invalid arguments');
//console.log(process.argv[4])

//creat many files with loop and access folder and listing files details
//const fs = require('fs');
//const path = require('path');
//const dirpath = path.join(__dirname,'files');
//console.warn(dirpath);

for(i = 0;i< 5; i++){
    //fs.writeFileSync(dirpath + "/test-" + i + ".text","hy dynamic fileess careted ny pathan");
    //.fs.writeFileSync(`${dirpath}/test-${i}.text`,"hy dynamic fileess careted ny pathan");
    //delete files
    //fs.unlinkSync(dirpath + "/test-" + i + ".text");
}
//dynamic file path with foreach loop
//fs.readdir(dirpath,(err,filess)=>{
//    //console.warn(filess);
//    filess.forEach((item)=>{
//        console.warn("this yjis a way"+ item);
//    });
//});

//crud file in node js
//const fs = require('fs');
//const path = require('path');
//const dirpath = path.join(__dirname,'crud');
//console.log(dirpath);
//const filepath = dirpath+'/hell.txt';
//create file
//fs.writeFileSync(filepath,'crud file by aamir pathan');
//read file
//fs.readFile(filepath,'utf8',(err,item)=>{
//    console.log(item);
//});

//fs.appendFile(filepath,' and updated file now',(err)=>{
//    if(!err) console.log("file has been updated")
//});

//fs.rename(filepath,dirpath+'/hello1.txt',(err)=>{
//    if(!err) console.log("file name has been changed");
//})


//asynchronous pro 
//console.log("start exuction");
//setTimeout(()=>{
//    console.log("process exuction");
//},2000);
//
//console.log("complete exuction");

//draw back examplete inm asyn
//let a  = 10;
//let b = 0;
//setTimeout(()=>{
//    b = 20;
//});
//console.warn(a+b);


//promises in nodejs or js
//let a  = 10;
//let b = 0;
//const waitingdata = new Promise((res,reject)=>{
//  setTimeout(()=>{
//   res(30); 
//   },2000);
//});
//waitingdata.then((data)=>{
//    b = data;
//    console.warn(a+b);
//});
//  console.warn(a+b);

//(18)Now working with exprrss.js
const express = require('express');
const app = express();
//app.get('/',(req,resp)=>{
//   resp.send("<h1>hy this our home page</h1><a href='/embed'>please click go to render html json page</a>"); 
//});
//app.get('/about',(req,resp)=>{
//   resp.send("<h2>hy this our about page</h2>"); 
//});

//request with params vv imp
//app.get('/interview',(req,resp)=>{
//    //console.log("data sent by reqest or brower==>",req.query);
//    //console.log("data sent by reqest or brower==>",req.query.name);
//   resp.send("<h2>hy this our arren interview page</h2>"+req.query.name); 
//});

//create and git input form params
//app.get('/embed',(req,resp)=>{
//    resp.send(`
//        <input type="text" placeholder="user name here" value="${req.query.name}"/>
//      <a href='/'>please click go to Home page</a>
//    `);
//});
//app.listen(4602);

//const fs = require('fs');
//fs.writeFileSync('index2.js','tr');

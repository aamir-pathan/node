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



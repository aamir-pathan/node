const apps = require('./app.js')
const arr = [2,3,4,4,7,8,90];
//console.log(apps.x);
//console.warn(apps.z());
//console.warn(apps);

//find like loop all array values
//arr.filter((items)=>{
//    console.warn(items);
//});

let result = arr.filter((items)=>{
//    return items === 4;
return items > 4;
});
//console.warn(result);

//create a file
//const fs = require('fs');
//fs.writeFileSync('hello1.txt','hy rhis my first file');
//const fs = require('fs').writeFileSync;
//fs('hellofun.js','from aamir pathan');


//create server
const http = require('http');
//function controldata(req,resp){
//   resp.write("<h1>tr Hello Mohd Aamir pathan learning Node js</h1>"); 
//   resp.end();
//}
//http.createServer(controldata).listen(4500);

http.createServer((req,resp)=>{
   resp.write("<h1>Hello Mohd Aamir pathan learning Node js</h1>"); 
}).listen(4500);




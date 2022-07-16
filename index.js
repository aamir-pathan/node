// const express = require('express');
// const app = express();
// require('./config');
// const nodeCollection = require('./nodedb');
// app.use(express.json());
// app.post('/create',async(req,resp)=>{
//     //console.warn('done')
//     let data = new nodeCollection(req.body);
//     let result  = await data.save();
//     console.warn(result);
// })
//aa
// app.get('/list',async(req,resp)=>{
//      let data =  await nodeCollection.find();
//      console.log(data);
// })
// app.delete('/delete/:_id',async(req,resp)=>{
//     let data  = await nodeCollection.deleteOne(
//         req.params.id
//     )
//     console.log(data);
// })
// app.put('/update/:_id',async(req,resp)=>{
//     let data = await nodeCollection.updateOne(
//         req.params,
//         {$set:req.params}
//     )
//     console.log(data);

// })
// app.listen(5000);


//search filed in node js
// const express = require('express');
// const app = express();
// require('./config')
// const node = require('./nodedb');
// app.use(express.json());
// app.get('/search/:key',async(req,resp)=>{
//     let data = await node.find({
//         "$or":[
//             {"name":{$regex:req.params.key}}
//         ]
// })
//     resp.send(data);
//     console.log(data);
// })
// app.listen(4000)

//upload a file with multer package
// const express = require('express');
// const app = express();
// const multers = require('multer');
// const upload = multers({
//    storage:multers.diskStorage({
//       destination:function(req,file,cb){
//          cb(null,'upload');
//       },
//       filename:function(req,file,cb){
//          cb(null,file.fieldname + "-"+ Date.now() +".jpg")
//       }
//    })
// }).single('user_file');


// app.post('/upload',upload,(res,resp)=>{
//    console.log('Successfull upload file');
// })
// app.listen(3000);


//how to get nfo of  our system like window and linux
// const os =  require("os");
// console.warn(os.arch());
// console.warn(os.freemem()/(1024*1024));
// console.warn(os.totalmem()/(1024*1024));
// console.log(os.homedir())
// console.log(os.userInfo())

//how to user event and emmit
// const express =require('express');
// const app = express();
// const EventEmitter = require('events')
// const event = new EventEmitter();
// let = count = 0;
// event.on("calledAPI", ()=>{
//    count++;
//    console.log("called evnt at least once",count)
// })

// app.get('/',(req,resp)=>{
//    resp.send("called home page");
//    event.emit("calledAPI");

// })
// app.listen(2000);

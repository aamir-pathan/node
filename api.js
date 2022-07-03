// // 31 read from mongb seprate file
// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const database = 'nodedb';
//  const dbconnect = require('./mongodb');
// async function dbconnect(){
//    let result = await client.connect();
//    db = result.db(database);
//    return db.collection('node');
// }
// first way to get data
// dbconnect().then((data)=>{
//     let getdata = data.find({}).toArray().then((gdata)=>{
//       console.warn(gdata);
//     });
// })
// good and modern way to get data
// const main =  async ()=>{
//    let data = await dbconnect();
//    data = await data.find().toArray();
//    console.warn(data);
// }
// main();

// 32 insert data in mongodb with node js create a file inser.js

//Get api from MongoDb and send to brower and postman

//const dbconnect = require('./mongodb');
// const express = require('express');
// const app = express();
// const findData = require('./find');
// app.get('/',async(req,resp)=>{
//    // let data  = await dbconnect();
//    // data = await data.find().toArray();
//    // resp.send(data);
//    let data = await findData();
//    console.log(data);
//      resp.send(data);
// })
//  app.listen(5100);

 //insert api postman to mongodb

//  const dbconnect = require('./mongodb');
//  const express = require('express');
//  const app = express();
//  //const insert = require('./insert');
// app.use(express.json());
//  app.post('/',async (req,resp)=>{
//   // let data  = await dbconnect();
//   // let result = await data.insertOne(req.body); 
//   //    console.log(req.body);
//   //    resp.send(result);
//     // let data = await insert(req.body);
//     // console.log(data);
//  })
//  app.listen(5000);


//use put method and update value of data base
// const dbconnect = require('./mongodb');
// const express =require('express');
// const app = express();
// app.use(express.json());
// //app.put('/',async(req,resp)=>{
// app.put('/:xyz',async(req,resp)=>{    
//     let data = await dbconnect();
//     let result = await data.updateOne(
//         // {name:'iphone 11'},
//         // {$set:{name:'iphone 10 pro',price:750}}
//     // dynamic data from params
//         // {name:req.body.name},
//         // {$set:req.body}
//     //with params
//         {name:req.params.xyz},
//         {$set:req.body}    
//     )
//     resp.send("result: aamir congratulation")
// });


// const mongodb = require('mongodb');

// app.delete('/:id',async (req,resp)=>{
//     //console.log(req.params.id);
//     const data = await dbconnect();
//     const result = await data.deleteOne(
//         {_id:new mongodb.ObjectId(req.params.id)}
//     )
// })

// app.listen(5000);

//connect with mongoDb
// const mongoose = require('mongoose');
// const main = async ()=>{
//     await mongoose.connect('mongodb://localhost:27017/nodedb');
//     let Nodeschema = new mongoose.Schema(
//         {name:String,
//         price:Number}
//         );
//     let nodeModel = mongoose.model("node",Nodeschema);
//     let data = new nodeModel({name:"m12",price:5454});
//     let result = await data.save();
//     console.log(result);
// } 
// main();


// CRUD operation with mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodedb');
const nodeSchema = new mongoose.Schema(
    {name:String}
    )
const saveIndb = async()=>{ 
   const node = mongoose.model('nodes',nodeSchema);
   const result = await  node.updateOne(
    {name:"m8"},
    {$set:{name:"m8 pro"}}
    )
    console.warn(result);
}

saveIndb();
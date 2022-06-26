//render html files in node js
//const express = require('express');
//const app = express();
const { connect } = require('http2');
const path = require('path');
const filespath = path.join(__dirname,'public');
////console.log(filespath);
//app.use(express.static(filespath));
//app.listen(4603);

//remove extention from urls
//app.get('/',(_,resp)=>{
//    resp.sendFile(`${filespath}/about.html`);
////}).listen(4604);
//});
//app.get('/about',(_,resp)=>{
//    resp.sendFile(`${filespath}/about.html`);
//})
//app.get('*',(_,resp)=>{
//    resp.sendFile(`${filespath}/invalidurl.html`);
//})
//app.listen(4604);

//dynamic page common header
// const express = require('express');
// const app = express();
// app.set('view engine','ejs')
// app.get('/profile',(req,resp)=>{
// const user = {
//     name : 'pathan',
//     branch : 'mca',
//     city : 'new yourk',
//     skills: ['node js','javascript','html5']
// };
//     //resp.render('profile');
//     resp.render('profile',{user});
// });

// app.get('/login',(_,resp)=>{
//     resp.render('login');
// })


//create middle ware
// const express = require('express');
// const app = express();
// const reqfilter = (req,resp,next)=>{
//     //console.log('reqfilter');
//     if(!req.query.age){
//         resp.send('<h2>please provide age</h2>')
//     }else if(req.query.age < 18){
//         resp.send('<h2>due to not got 18 age can"t access web</h2>')
//     }else
//     next();
// }
// //for all application
// //app.use(reqfilter)
//single route middleware
// app.get('/',reqfilter,(req,resp)=>{
//     resp.send('<h1>welcome this home page</h1>')
// });
// app.get('/owner',(req,resp)=>{
//     resp.send('<h1>Hello welcome this owner page</h1>')
// });
// app.get('/user',(req,resp)=>{
//     resp.send('<h1>Hello welcome this user page</h1>')
// });
// app.listen(4604);

//groups routes middleware
// const express = require('express');
// const app = express();
// const reqfilter = require('./middleware');
// const route = express.Router();
// route.use(reqfilter);
// //for single route midleware
// app.get('/',(req,resp)=>{
//    resp.send('this home page signle routes')
// });
// //gourps middle ware
// route.get('/contact',(req,resp)=>{
//     resp.send('this contact page page')
//  });
//  route.get('/end',(req,resp)=>{
//     resp.send('this end page oh')
//  });
// app.use('/',route);
// app.listen(4604);


// connect with mongoid icloud
// const mongoose = require('mongoose')
// const dburl = "mongodb+srv://aamirdb:aamirdb@cluster0.grz3e.mongodb.net/?retryWrites=true&w=majority";
// const conectionParams = {
//    userNewUrlParser:true,
//    userUnifiedTopology:true,
// }

// mongoose.connect(dburl, conectionParams).then(()=>{
//    console.log('databse contacted');
// });

// connect with mongo db
const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'nodedb'; 

async function getData(){
   let result = await client.connect();
   console.log(client.connect());
   //let db = result.db('nodedb');
   let db = result.db(database);
   let collection = db.collection('node');
   //console.log(collection.find({}).toArray());
   let response = await collection.find({}).toArray();
   console.log(response);
}
getData();

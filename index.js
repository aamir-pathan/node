//render html files in node js
//const express = require('express');
//const app = express();
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
const express = require('express');
const app = express();

const reqfilter = (req,resp,next)=>{
    //console.log('reqfilter');
    if(!req.query.age){
        resp.send('<h2>please provide age</h2>')
    }else if(req.query.age < 18){
        resp.send('<h2>due to not got 18 age can"t access web</h2>')
    }else
    next();
}
app.use(reqfilter)
app.get('/',(req,resp)=>{
    resp.send('<h1>welcome this home page</h1>')
});
app.get('/user',(req,resp)=>{
    resp.send('<h1>Hello welcome this user page</h1>')
});
app.listen(4604);
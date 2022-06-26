module.exports = reqfilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('<h2>please provide age</h2>')
    }else if(req.query.age < 18){
        resp.send('<h2>due to not got 18 age can"t access web</h2>')
    }else
    next();
}
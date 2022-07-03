const dbconnect = require('./mongodb');
const findData =
 async ()=>{
    let data = await dbconnect(); 
    data = await data.find().toArray();
    //console.log(data);
    return data
}
//findData();
module.exports = findData;
const dbconnect  = require('./mongodb');
const deleteData =  async ()=>{
    const db = await dbconnect();
    const result = await db.deleteMany({name: 'iphone 11'});
if(result.acknowledged){
    console.warn('cong data has beem delete');
 }
 console.log(result);
}

deleteData();
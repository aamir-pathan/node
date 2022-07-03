const dbconnect = require('./mongodb');
const insert = async ()=>{
    let db = await dbconnect();
    //console.warn(db);
    // let result = await db.insert(
    //     {name:'iphone 14',brand: 'mobile',price: 9300}
    // )
    let result = await db.insert(
        [
          {name:'iphone 10',brand: 'mobile',price: 45200},
          {name:'iphone 11',brand: 'mobile',price: 5400}
        ]
    )
    console.warn(result);
    if(result.acknowledged){
        console.warn('data successful inserted');
    }
}
module.exports = insert;
//insert();
const dbconnect = require('./mongodb');
async function updateData(){
    let db  = await dbconnect();
    //console.log(db);
    let result = await db.updateOne(
        {name:'redmi'},{
            $set:{name:'vivo',price:3000}
        }
    );
    if(result.acknowledged){
        console.log('result update');    
    }
    console.log(result);
}

updateData();

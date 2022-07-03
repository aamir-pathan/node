const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = 'nodedb';

const dbconnect =
 async function dbconnect(){
       let result = await client.connect();
       db = result.db(database);
       return db.collection('node');
    }
    module.exports = dbconnect;
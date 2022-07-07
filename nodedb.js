//table or collection name 
const mongoos = require('mongoose');
const nodeSchema = mongoos.Schema(
    {name:String,
    brand:String, 
    price:Number
});
module.exports = mongoos.model('node',nodeSchema);
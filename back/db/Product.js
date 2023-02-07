const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    userid:String,
    category:String
}); 
module.exports = mongoose.model("products",productSchema);

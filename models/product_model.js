let mongoose=require('mongoose');
let schema=mongoose.Schema({
name:{type:String,require:true},
price:{type:String},
image:{type:Array},
catagory:{type:String},
brand:{type:String}
})

let dutchRoomModel=mongoose.model('products',schema);
module.exports=dutchRoomModel;

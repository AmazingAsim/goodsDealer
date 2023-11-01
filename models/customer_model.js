let mongoose=require('mongoose');


let schema=mongoose.Schema({
name:{type:String,require:true},
phone:{type:String,require:true},
intrests:{type:String}
})

let usermodel=mongoose.model('customers',schema)

module.exports=usermodel;
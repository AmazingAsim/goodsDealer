let mongoose=require('mongoose');


let schema=mongoose.Schema({
name:{type:String,require:true},
email:{type:String,require:true,unique:true},
password:{type:String,required:true}
})

let usermodel=mongoose.model('user',schema)

module.exports=usermodel;
let dbcollection=require('../models/user_model');

exports.finduser=()=>{
    return dbcollection.find();
}

exports.login = (user)=>{
    let email = user.email;
    return dbcollection.findOne({email})
}
exports.adduser=(user)=>{
    console.log(user)
    return dbcollection.insertMany([user])
}

exports.deleteuser=(id)=>{
  
    return dbcollection.deleteOne({_id:id});
}

exports.updateuser=(user)=>{
    return dbcollection.updateOne({_id:user._id},{$set:{name:user.name,email:user.email,profile:user.profile}});
}





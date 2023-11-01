let dbcollection=require('../models/product_model');

exports.addProduct = (product)=>{
    return dbcollection.insertMany([product])
}


exports.findone = (id)=>{
    return dbcollection.findOne({_id:id})
}

exports.findByCatagory = (cat)=>{
    return dbcollection.find({catagory:cat});
}

exports.findByName = (name)=>{
    return dbcollection.find({name: { $regex: '.*' + name + '.*' } });
}



exports.updateProduct = (id,product)=>{
    return dbcollection.updateOne({_id:id},product)
}

exports.findAll = ()=>{
    return dbcollection.find()
}

let dbcollection=require('../models/product_model');

exports.addProduct = (product)=>{
    return dbcollection.insertMany([product])
}


exports.findone = (id)=>{
    return dbcollection.findOne({_id:id})
}

exports.updateProduct = (product)=>{
    return dbcollection.updateOne({_id:id},product)
}

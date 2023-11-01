let dbcollection = require('../models/customer_model');

exports.addCustomers = (customer)=>{
    return dbcollection.insertMany([customer])
}

exports.findone = (id)=>{
    return dbcollection.findOne({_id:id})
}

exports.updateProduct = (id,customer)=>{
    return dbcollection.updateOne({_id:id},customer)
}

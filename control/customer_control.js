let customer_repo=require('../repo/customers_repo');



exports.addCustomer=async (req,res)=>{

    let customer = req.body;
    let result = await customer_repo.addCustomer(customer)
    res.json({result:result})
};



exports.findCustomer=async (req,res)=>{

    let id = req.params.id;
    let result = await customer_repo.findone(id)
    res.json({data:result})
};


exports.updateCustomer=async (req,res)=>{
    let id = req.params.id;
    let customer = req.body;
    let result = await customer_repo.updateCustomer(id,customer)
    res.json({data:result})
};



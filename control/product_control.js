let product_repo=require('../repo/product_repo');

exports.addProduct=async (req,res)=>{

    let product = req.body;
    let result = await product_repo.addProduct(product)
    res.json({result:result})
};

exports.findAll = async (req,res)=>{
    let result = await product_repo.findAll();
    res.send(result);
}


exports.findProduct=async (req,res)=>{

    let id = req.params.id;
    let result = await product_repo.findone(id)
    res.json({data:result})
};


exports.updateProduct=async (req,res)=>{
    let id = req.params.id;
    let product = req.body;
    let result = await product_repo.updateProduct(id,product)
    res.json({data:result})
};

exports.findByCatagory = async(req,res)=>{
    let cat = req.params.catagory;
    let result = await product_repo.findByCatagory(cat);
    res.json(result);
}


exports.findByName = async(req,res)=>{
    let name = req.params.name;
    let result = await product_repo.findByName(name)
    res.json(result);
}


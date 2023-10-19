let product_repo=require('../repo/product_repo');



exports.addProduct=async (req,res)=>{

    let product = req.body;
    let result = await product_repo.addProduct(product)
    res.json({result:result})
};



exports.findProduct=async (req,res)=>{

    let id = req.params.id;
    let result = await dutchrepo.findone(id)
    res.json({data:result})
};


exports.updateProduct=async (req,res)=>{
    let product = req.body.id;
    let result = await product_repo.updateProduct(product)
    res.json({data:result})
};



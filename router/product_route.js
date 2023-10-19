const { Router } = require('express');
let express=require('express');
let route=express.Router();

let productController=require('../control/product_control');

route.get('/getdutch/:id',productController.findProduct);

route.post('/add_dutch',productController.addProduct);

route.patch('/update',productController.updateProduct);

module.exports = route;
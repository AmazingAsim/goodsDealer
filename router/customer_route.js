const { Router } = require('express');
let express=require('express');
let route=express.Router();

let customerController=require('../control/customer_control');

route.get('/get_customer/:id',customerController.findCustomer);

route.post('/add_customer',customerController.addCustomer);

route.patch('/update_customer/:id',customerController.updateCustomer);

module.exports = route;
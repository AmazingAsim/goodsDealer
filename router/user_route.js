const { Router } = require('express');
let express=require('express');
let route=express.Router();

let usercontroller=require('../control/usercontroller');
//get 
route.get('/finduser',usercontroller.findAlluser);
//post
route.post('/adduser',usercontroller.adduser);
//delete
route.delete('/deleteuser/:id',usercontroller.deleteuser);
//update
route.put('/updateuser',usercontroller.updateuser)
//login
route.post('/login',usercontroller.login)



module.exports=route;
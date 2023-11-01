const { Router } = require('express');
let fs = require('fs')
const product_repo = require('../repo/product_repo')
let express=require('express');
let route=express.Router();
let productController=require('../control/product_control');
// multer setup
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      let id = req.params.id;
      let ext = file.originalname.split('.')
      ext = file.originalname.split('.')[ext.length-1];
      cb(null, `${id}.${ext}`);
    },
  });
  
  const upload = multer({ storage: storage });
route.get('/get_products',productController.findAll)

route.get('/get_product/:id',productController.findProduct);

route.post('/add_product',productController.addProduct);

route.patch('/update_product/:id',productController.updateProduct);

route.post('/addimages/:id', upload.array('files', 5), async(req, res) => {
    // Access the array of uploaded files via req.files

    console.log(req.files);
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
  
    // Process the uploaded files as needed
    let id = req.params.id;
    let product = {image:[req.files[0].filename]}
    let result = await product_repo.updateProduct(id,product);
    res.status(200).send(result);
  });

  route.get('/getImage/:name',(req,res)=>{
    res.sendFile(`${req.params.name}`, { root: './uploads' })
  })

  route.get('/findbycatagory/:catagory',productController.findByCatagory)
  route.get('/findbyname/:name',productController.findByName)

module.exports = route;
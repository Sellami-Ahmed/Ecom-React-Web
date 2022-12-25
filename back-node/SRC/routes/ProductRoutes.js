const express=require("express");
const router =express.Router();
const productController=require('../controller/ProductController');
const auth =require('../middelware/auth')
const hasRole =require('../middelware/hasRole')
router.post('/add',auth,hasRole("admin"),productController.addProduct);
router.put('/update/:id',auth,productController.updateProduct);
router.get('/getAll',auth,productController.getAllProduct);
router.get('/get/:id',auth,productController.getProductById);
module.exports=router;
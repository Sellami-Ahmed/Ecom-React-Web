const express=require("express");
const router =express.Router();
const commandController=require('../controller/CommandController');
const auth =require('../middelware/auth')
const hasRole =require('../middelware/hasRole')
router.post('/add',auth,hasRole("admin"),commandController.addCommand);
router.get('/getAll',auth,hasRole("admin"),commandController.getAllCommand);
module.exports=router;
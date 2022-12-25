const express=require("express");
const router =express.Router();
const userController=require('../controller/UserController');
const auth =require('../middelware/auth')
router.post('/signIn',userController.login);
router.post('/signUp',userController.signUp);
router.get('/getUserDetails/:id?',auth,userController.getUserDetails);
router.get('/deleteAllUser',userController.deleteAllUsers);
router.delete('/deleteUser',userController.deleteUser);
module.exports=router;
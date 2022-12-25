const { User } = require("../model/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(404).json({ status: 404, message: "User not found !!" });
    } else {
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            res
              .status(403)
              .json({ status: 403, message: "Invalid password!!" });
          } else {
            let token = jwt.sign({ userId: user._id }, "500", {
              expiresIn: "1440h",
            });
            User.updateOne(
              { email: req.body.email },
              {
                $set: {
                  token: token,
                },
              }
            )
              .then(() => {
                res.status(200).json({
                  status: 200,
                  message: "Login with sucess",
                  data: user,
                  token:token,
                });
              })
              .catch((err) =>
                res.status(400).json({ status: 400, message: err.message })
              );
          }
        })
        .catch((err) =>
          res.status(500).json({ status: 500, message: err.message })
        );
    }
  });
};
async function deleteUser(req,res){
  try{
    
    if(req.query.userId){
      const user=await User.findByIdAndDelete(req.query.userId);
      if(user){
      return await res.status(200).json({status:200 , message :"user deleted"})
    }
    return res.status(404).json({status:404 , message :"user not found"})
  }
    return res.status(400).json({status:400 , message :"User id required!!!!"})

  }
  catch(err){
    return res.status(500).json({status:500 , message :err.message})
  }
} 
const getUserDetails = (req, res) => {
  res.status(200).json({ status: 200, data: req.user });
};
const deleteAllUsers=(req,res)=>{
  
  User.deleteMany({}).then(
    (valid)=>{
      if(valid){
        res.status(200).json({ status: 200, message: "ALL users deleted" });
      }
      else{
        res.status(400).json({ status: 400, message: "ALL users already deleted" });
      }
    }
  ).catch((error) => {
    res.status(500).json({ status: 500, message: error.message });
  });
  
}
const signUp = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        res.status(409).json({ status: 409, message: "email already exists" });
      } else {
        bcrypt
          .hash(req.body.password, 10)
          .then((hash) => {
            let userDetails = new User({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
            });
            userDetails.save();
          })
          .then(() => {
            res.status(201).json({ status: 201, message: "user created" });
          })
          .catch((error) => {
            res.status(400).json({ status: 400, message: error.message });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ status: 500, message: error.message });
    });
};
exports.login = login;
exports.deleteAllUsers = deleteAllUsers;
exports.getUserDetails = getUserDetails;
exports.signUp = signUp;
exports.deleteUser = deleteUser;

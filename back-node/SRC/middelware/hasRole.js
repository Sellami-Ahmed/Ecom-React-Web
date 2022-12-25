module.exports = (role)=>{
return (req, res, next) => {
  try {
    if(role){
    if (req.user.role === role) {
      next();
    }
    else{
        return res.status(401).json({ status: 401, error: new Error("invalid request!") });
    }}
    else{
        next();
    }
  } catch (err) {
    return res.status(401).json({ status: 401, error: err.message });
  }
}};

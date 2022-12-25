const { Command } = require("../model/Command");
const { Product } = require("../model/Product");

async function addCommand(req, res, next) {
  try {
    const { products } = req.body;
    if (products.length) {
      let validate=true;
      let commandPrice=0;
      const listProducts =await Product.find({
        _id: { $in: products.map(el=>el.product) },
      });
      
      for (let index=0;index<listProducts.length;index++){
        const element=listProducts[index];
        const indexElement=products.findIndex(el=>el.product===element._id.toString());
        if(indexElement !==-1){
          if(products[indexElement].quantity >= element.stock){
            validate=false;
            break
          }else{
            commandPrice +=products[indexElement].quantity *element.price;
          }
        }
      }
      if (validate) {
        const command = new Command({
          userId: req.user._id,
          products: products,
          date: new Date(),
          price:commandPrice,
        });
        command.save().then(async () => {
          for (let index = 0; index < products.length; index++) {
            await Product.findByIdAndUpdate(products[index].product, {
              $inc: { stock: -products[index].quantity },
            });
          }
          res.status(201).json({
            status: 201,
            message: "Command created.",
          });
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "Product Stock Problem",
        });
      }
    } else {
      res.status(400).json({ status: 400, message: "Check your data" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}

async function getAllCommand(req, res, next) {
  try {
    const commands = await Command.find()
      .populate({ path: "userId", select: ["firstName", "lastName"] })
      .populate("products");
    res.status(200).json({
      status: 200,
      data: commands,
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}
exports.addCommand = addCommand;
exports.getAllCommand = getAllCommand;

const {normalizePort} = require("./SRC/common/Common");
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors =require('cors');
const app = express();
const userRoutes = require("./SRC/routes/UserRoutes");
const productRoutes = require("./SRC/routes/ProductRoutes");
const commandRoutes = require("./SRC/routes/CommandRoutes");
var http = require("http");
var server = http.createServer(app);
var port = normalizePort(process.env.PORT || 4000);
app.use(express.json());
app.use(cors());
server.listen(port, () => {
  console.log("server is running on :", port);
});
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection à MongoDB est réussie!!"))
  .catch((err) => console.log("Connection à échouée !!  :", err.message));

  app.use("/", userRoutes);
  app.use("/product", productRoutes);
  app.use("/command", commandRoutes);

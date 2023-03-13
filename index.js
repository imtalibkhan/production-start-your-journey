const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors")
const authController = require("./controller/authController");
const roomController = require("./controller/roomcontroller");
const uploadController = require("./controller/uploadController");
const dotenv = require("dotenv").config();
const app = express();
const path = reuire('path')

//2==>connect db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("database is connected")
);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//3==> middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/images', express.static('public/images'))
app.use('/auth', authController)
app.use('/room', roomController)
app.use("/upload",uploadController)
app.use(express.static(path.join(__dirname, './client/build')))


//2==> start our server
app.listen(process.env.PORT, () => console.log("server is connected"));

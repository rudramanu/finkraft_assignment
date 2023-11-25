const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const { sequelize } = require("./configs/db");
const { userRouter } = require("./routes/user.route");
const { fileRouter } = require("./routes/file.route");
const { authentication } = require("./middleware/authentication");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("APIs are working fine");
});
app.use("/user", userRouter);
app.use("/file", authentication, fileRouter);

app.listen(9800, async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
  console.log("Server is running on port 9800");
});

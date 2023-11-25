const { UserModel } = require("../models/user.model");
const express = require("express");
const userRouter = express.Router();
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  const user = await UserModel.findOne({ where: { email } });
  if (user) {
    return res.send({ message: "User already exists" });
  }
  try {
    bcrypt.hash(password, 3, async (err, encrypted) => {
      if (err) {
        res.status(403).send({ message: "Something went wrong" });
      } else {
        await UserModel.create({ name, email, password: encrypted });
        res.status(200).send({ message: "User Created" });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const hashed_password = user.password;
    console.log("hashed_password", hashed_password);

    bcrypt.compare(password, hashed_password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userId: user.id }, process.env.secretKey);
        // console.log("userId", user.id);
        // console.log("token", token);
        res.status(200).send({
          message: "Logged in successfully",
          token: token,
          name: user.name,
          email,
        });
      } else {
        res.status(409).send({ message: "Wrong credentials" });
      }
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = {
  userRouter,
};

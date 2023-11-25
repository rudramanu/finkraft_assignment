const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.send({ message: "Access Denied" });
  }
  const decoded = jwt.verify(token, "coder");
  if (decoded) {
    // req.file = req.file || {};
    req.userId = decoded.userId;
    next();
  } else {
    res.send("Please login first");
  }
};

module.exports = { authentication };

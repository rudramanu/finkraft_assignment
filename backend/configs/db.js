const { Sequelize } = require("sequelize");
require("dotenv").config();
const password = process.env.password;
const sequelize = new Sequelize("finkraft", "root", password, {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { sequelize };
// const sequelize = new Sequelize("finkraft", "admin", "Manuranjan00", {
//   host: "database-1.cugai8ped57o.ap-south-1.rds.amazonaws.com",
//   dialect: "mysql",
// });

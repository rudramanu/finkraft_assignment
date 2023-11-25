const { sequelize } = require("../configs/db");
const DataTypes = require("sequelize");

const FileModel = sequelize.define(
  "files",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    upload_date: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = { FileModel };

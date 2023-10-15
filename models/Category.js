const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("spendingapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.UUID,
      field: "id",
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    category_name: {
      type: DataTypes.STRING,
      field: "category_name",
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "categories",
  },
  {
    timestamps: true,
  }
);

Category.sync({ alter: true });

module.exports = Category;

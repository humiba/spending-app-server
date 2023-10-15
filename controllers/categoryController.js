const Category = require("../models/Category");

const addCategory = async (req, res) => {
  /**
   * Body: { category_name }
   */
  const { category_name } = req.body;

  try {
    const category = await Category.create({ category_name: category_name });
    res.status(201).send(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addCategory };

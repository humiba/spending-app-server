const Category = require("../models/Category");

const addCategory = async (req, res) => {
  /**
   * Body: { category_name }
   */
  console.log(req.body);
  const { category_name } = req.body;

  try {
    const category = await Category.create({
      category_name: category_name.toLowerCase(),
    });
    res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({
      msg: error.message,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(403).json({ error, message: "Cannot get categories" });
  }
};

const getSpecificCategories = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByPk(id);
    res.status(201).json(category);
  } catch (error) {
    return res.status(404).json({
      msg: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error, message: "Cannot update category" });
  }
};

const deleteCategory = async (req, res) => { 
  const { id } = req.params;
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(404).json({ error, message: "Cannot delete category" });
  }
}

module.exports = {
  addCategory,
  getAllCategories,
  getSpecificCategories,
  updateCategory,
  deleteCategory,
};

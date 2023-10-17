const express = require("express");
const router = express.Router();

const {
  addCategory,
  getAllCategories,
  getSpecificCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.post("/category/add", addCategory);
router.get("/category/all", getAllCategories);
router.get("/category/:id", getSpecificCategories);
router.put("/category/update/:id", updateCategory);
router.delete("/category/delete/:id", deleteCategory);

module.exports = router;
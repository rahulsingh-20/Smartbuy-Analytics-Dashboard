const express = require("express");
const {
  getAllProducts,
  createProduct,
  getTotalSales,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/totalsales").get(getTotalSales);

module.exports = router;

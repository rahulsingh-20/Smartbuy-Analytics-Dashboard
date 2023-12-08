const express = require("express");
const {
  getAllProducts,
  createProduct,
  getTotalSales,
  getTopSelling,
  getSalesByCountry,
  getRevenue,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("/product/totalsales").get(isAuthenticatedUser, getTotalSales);
router.route("/product/topselling").get(isAuthenticatedUser, getTopSelling);
router
  .route("/product/salesbycountry")
  .get(isAuthenticatedUser, getSalesByCountry);
router.route("/product/revenue").get(isAuthenticatedUser, getRevenue);

module.exports = router;

const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.getTotalSales = catchAsyncErrors(async (req, res, next) => {
  const totalsales = await Product.aggregate()
    .project({ totalSales: { $multiply: ["$unitPrice", "$quantity"] } })
    .group({ _id: null, totalSales: { $sum: "$totalSales" } })
    .exec();

  console.log(totalsales);

  res.status(201).json({
    success: true,
    totalSales: totalsales[0].totalSales,
  });
});

exports.getTopSelling = catchAsyncErrors(async (req, res, next) => {
  const size = parseInt(req.query.limit);

  const topselling = await Product.aggregate()
    .addFields({
      sales: { $multiply: ["$unitPrice", "$quantity"] },
    })
    .sort({ sales: -1 })
    .limit(Math.max(size, 1))
    .project({
      _id: 0,
      name: 1,
      stockCode: 1,
      sales: 1,
    });

  res.status(201).json({
    success: true,
    topselling,
  });
});

exports.getSalesByCountry = catchAsyncErrors(async (req, res, next) => {
  const topselling = await Product.aggregate()
    .addFields({
      sales: { $multiply: ["$unitPrice", "$quantity"] },
    })
    .group({ _id: "$country", totalSales: { $sum: "$sales" } })
    .exec();

  res.status(201).json({
    success: true,
    topselling,
  });
});

exports.getRevenue = catchAsyncErrors(async (req, res, next) => {
  const country = req.query.country;

  const revenue = await Product.aggregate()
    .match({ country: country })
    .addFields({
      sales: { $multiply: ["$unitPrice", "$quantity"] },
    })
    .group({
      _id: null,
      totalRevenue: { $sum: "$sales" },
    });

  res.status(201).json({
    success: true,
    revenue: revenue[0].totalRevenue,
  });
});

// Create product --> admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

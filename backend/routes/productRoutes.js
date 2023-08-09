import express from "express";
// import products from "../data/products.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();
//instead of app.get we're going to be using the router.get
//GET request -- {{baseURL}}/products
//instead of "/api/products", we're going to be using "/"

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//instead of "/api/products/:id", we're going to be using "/:id"
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;

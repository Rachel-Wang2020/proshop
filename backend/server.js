import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); //connect to mongose
const app = express();

app.get("/", (req, res) => {
  res.send("API is running....");
});

//move to routes.js
/*app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
*/
//move to routes.js

//So any time we hit this route, no matter what is after it,
//it's going to go to this file product routes, which is what we just created.
//That's why we don't have API slash products in here because then it would go to it twice, right?
app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

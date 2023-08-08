import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

//now we want to initialize out dotenv so we can use those variables.
dotenv.config();

//we want to connect to our database
connectDB();

//two functions --- import data & destroy data
const importData = async () => {
  //first of all, just delete everything.
  //so before we import any products or users, we want to delete them all.
  try {
    //to do that we going to await, because everymongoose method that you call is going to return a romise.
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //now we want to create our users and we're going to put the created users into a variable.
    const createUsers = await User.insertMany(users);
    const adminUser = createUsers[0]._id;
  } catch (error) {}
};

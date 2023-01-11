// const express = require("express");
import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

//multer
// const __dirname = path.resolve();
// const folder = path.resolve();
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));

//middleware
app.use(express.json()); //body parser

//connect to .env file and setup server
// const dotenv = require("dotenv");
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold
  )
);
//

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

//paypal router setup
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// const products = require("./data/products");
// import products from "./data/products.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

app.use(notFound);
app.use(errorHandler);

//connect to atlas database
import mongoose from "mongoose";

const DB = process.env.MONGO_URI.replace("password1234", process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!".cyan.underline);
});
//

import colors from "colors";

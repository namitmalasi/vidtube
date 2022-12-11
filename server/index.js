import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);


const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Database Connected!!!");
    })
    .catch((err) => {
      throw err;
    });
};

app.listen(8800, () => {
  connect();
  console.log("Server Running!!!");
});

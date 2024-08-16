import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from "jsx-view-engine";
import methodOverride from "method-override";
import db from "./db/conn.mjs";


// create express application
const app = express();
const PORT = process.env.PORT || 5050;
app.use(express.json());
// ================ Set up view engine ================
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// ================ Middleware ================
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// ================ Routes ================

app.get("/", (req, res) => {
    res.send(
      `<div>This is my candies and cookies route Taste of Home 
      <br/><a href='/candies'>candies</a><br/><a href='/cookies'>cookies</a><br/><a href='/users'>users</a</div>`
     
    );
  })






app.listen(PORT, () => {
    console.log("Port is listening");
});
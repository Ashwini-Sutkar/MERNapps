//require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

// database connect 

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port : ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("Mongo db connecyion failed !! ", err);
})






















/*
import express from "express";
const app = express();
// using IIFE
// ; reason for cleaning  purpose code 
;(async ()=>{
    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      // app ke pass listener hote hai to 
      app.on("error", (error)=>{
        console.log("Error:", error);
        throw error
      })
      app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
    }catch(error){
        console.log("ERROR", error);  
        throw err  
    }
})()
*/


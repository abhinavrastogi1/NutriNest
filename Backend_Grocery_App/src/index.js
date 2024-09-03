import express from "express";
import dotenv from "dotenv";
import app from "./app.js";
import Connect_DB from "./DB/DataBaseConnection.js";
dotenv.config({
  path: "../.env",
});
Connect_DB()
  .then(() => {
    //database  connected successfully server serrving at port no.
    app.listen(process.env.PORT, () => {
      console.log(`server is runing at port no. ${process.env.PORT}`);
      console.log(`http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    // connection to data base failed
    console.log("mongodb connection failed", error);
  });

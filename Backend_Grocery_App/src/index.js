import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const app = express();

app.get("/", (req,res) => {
    const response= {
        status: "success",
        data: {
          user: {
            id: 12345,
            name: "John Doe",
            email: "johndoe@example.com",
            role: "admin",
          },
          message: "User data retrieved successfully",
        } };
 res.json(response);
});

app.listen(process.env.PORT, () => {
  console.log(`server ise runing at port no. ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});

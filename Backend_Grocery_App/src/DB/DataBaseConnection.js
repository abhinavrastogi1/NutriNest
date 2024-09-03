import { DB_Name } from "../constants.js";
import mongoose from "mongoose";
const Connect_DB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`,
    );
    //    console.log(connectionInstance)
    // console.log(
    //   `\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    // );
  } catch (error) {
    console.log("something is wrong while connecting Data Base", error);
    process.exitCode(1);
  }
};
export default Connect_DB;

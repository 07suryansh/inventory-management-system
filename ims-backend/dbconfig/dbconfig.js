import mongoose from "mongoose";
export const dbconnect = async () => {
  const MONGO_URL = process.env.DB_URL;

  const PORT = process.env.PORT || 6001;
  mongoose.set("strictQuery", false);
  try{
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  }
  catch(error){
    console.log(error);
  }
}
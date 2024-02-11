import mongoose from "mongoose";
import bcrypt from "bcrypt";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 2,
      max: 50,
      required: true,
    },
    detail:{
      type:String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      unique: true,
    },
    approval: {
      type: String,
      enum: ["approved", "rejected"],
    },
    track: {
      type: String,
      enum: ["Unplaced", "Placed", "Shipped", "Transition", "Delieverd"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;

import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      min: 2,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    role: {
      type: String,
      enum: ["vendor", "user", "shipper"],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", (next) => {
  this.password = bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model("User", UserSchema);

export default User;

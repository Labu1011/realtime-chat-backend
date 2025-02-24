import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "Fullname is required."],
    },
    password: {
      type: String,
      required: [true, "Password is a required field."],
      minLength: [6, "Password must be at least 6 characters."],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;

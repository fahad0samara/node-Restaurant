import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of auth0Id
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of email
    lowercase: true, // Convert email to lowercase
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validate email format
  },
  name: {
    type: String,
    trim: true, 
  },
  addressLine1: {
    type: String,
    trim: true, 
  },
  city: {
    type: String,
    trim: true, 
  },
  country: {
    type: String,
    trim: true, 
  },
});

const User = mongoose.model("User", userSchema);
export default User;

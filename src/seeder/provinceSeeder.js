import mongoose from "mongoose";
import dotenv from "dotenv";
import Province from "../models/Province.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URL);

const provinces = [
  { name: "Koshi", slug: "koshi" },
  { name: "Madhesh", slug: "madhesh" },
  { name: "Bagmati", slug: "bagmati" },
  { name: "Gandaki", slug: "gandaki" },
  { name: "Lumbini", slug: "lumbini" },
  { name: "Karnali", slug: "karnali" },
  { name: "Sudurpashchim", slug: "sudurpashchim" },
];

await Province.insertMany(provinces);

console.log("Provinces Inserted");
process.exit();
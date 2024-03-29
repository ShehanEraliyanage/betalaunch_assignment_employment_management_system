import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

// Import routes

import employeeRoutes from "./routes/employee.js";

// Constants
dotenv.config();
const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 10000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(URL, {
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Use routes
app.use("/employee", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

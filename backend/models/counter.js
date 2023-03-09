import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
  id: { type: String, required: true },
  seq: { type: Number, default: 1 },
});

export const countModel = mongoose.model("count", countSchema);

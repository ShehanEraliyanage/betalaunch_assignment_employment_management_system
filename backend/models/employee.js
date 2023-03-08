import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  fullName: { type: String, required: true },
  nameWithInitials: { type: String, required: true },
  displayName: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  designation: { type: String, required: true },
  eType: { type: String, required: true },
  joinDate: { type: String, required: true },
  experience: { type: String, required: true },
  salary: { type: Number, required: true },
  personalNotes: { type: String, required: true },
});

export const employeeModel = mongoose.model("employees", employeeSchema);

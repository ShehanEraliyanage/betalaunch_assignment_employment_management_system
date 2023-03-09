import { employeeModel } from "../models/employee.js";
import { countModel } from "../models/counter.js";

export const addEmployee = async (req, res) => {
  try {
    const counter = await countModel.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const employee = new employeeModel({
      fullName: req.body.fullName,
      nameWithInitials: req.body.nameWithInitials,
      displayName: req.body.displayName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      mobile: req.body.mobile,
      designation: req.body.designation,
      eType: req.body.eType,
      joinDate: req.body.joinDate,
      experience: req.body.experience,
      salary: req.body.salary,
      personalNotes: req.body.personalNotes,
      employeId: counter.seq,
    });

    const details = await employee.save();

    res.send({
      status: 200,
      details: details,
    });
  } catch (error) {
    console.error(error);
    res.send({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const getAllEmployees = async (req, res) => {
  const employees = await employeeModel.find({});
  res.send(employees);
};

export const getSelectedEmployee = async (req, res) => {
  const employee = await employeeModel.findOne({ _id: req.body.id });
  res.send(employee);
};

export const updateEmployee = async (req, res) => {
  try {
    const vehicle = await employeeModel.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        _id: req.body.id,
        fullName: req.body.fullName,
        nameWithInitials: req.body.nameWithInitials,
        displayName: req.body.displayName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation,
        eType: req.body.eType,
        joinDate: req.body.joinDate,
        experience: req.body.experience,
        salary: req.body.salary,
        personalNotes: req.body.personalNotes,
      },
      {
        new: true,
      }
    );
    if (vehicle) {
      res.send({
        status: 200,
        vehicle: vehicle,
      });
    } else {
      res.send({
        status: 500,
        vehicle: vehicle,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEmployee = async (req, res) => {
  const employee = await employeeModel.findOneAndDelete({ _id: req.body.id });
  res.send(employee);
};

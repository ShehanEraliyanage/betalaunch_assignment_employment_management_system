import { employeeModel } from "../models/employee.js";

export const addEmployee = async (req, res) => {
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
  });
  const details = await employee.save();
  if (details) {
    res.send({
      status: 200,
      details: details,
    });
  } else {
    res.send({
      status: 500,
      details: details,
    });
  }
};

export const getAllEmployees = async (req, res) => {
  const employees = await employeeModel.find();
  if (employees) {
    res.send({
      status: 200,
      employees: employees,
    });
  } else {
    res.send({
      status: 500,
      employees: employees,
    });
  }
};

export const getSelectedEmployee = async (req, res) => {
  const employee = await employeeModel.findOne({ _id: req.body.id });
  if (employee) {
    res.send({
      status: 200,
      employee: employee,
    });
  } else {
    res.send({
      status: 500,
      employee: employee,
    });
  }
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
  if (employee) {
    res.send({
      status: 200,
      employee: employee,
    });
  } else {
    res.send({
      status: 500,
      employee: employee,
    });
  }
};

import express from "express";

//Controllers
import {
  addEmployee,
  getAllEmployees,
  deleteEmployee,
  getSelectedEmployee,
  updateEmployee,
} from "../controllers/employee.js";

const router = express.Router();

router.post("/addEmployee", addEmployee);
router.get("/getAllEmployees", getAllEmployees);
router.post("/deleteEmployee", deleteEmployee);
router.post("/getSelectedEmployee", getSelectedEmployee);
router.post("/updateEmployee", updateEmployee);

export default router;

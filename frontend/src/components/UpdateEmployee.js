import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";

//controllers
import { updateEmployee, getSelectedEmployee } from "../controllers/employee";
import FormInput from "./FormInput";
import FormInputDate from "./FormInputDate";

export default function UpdateEmployee(props) {
  const { id } = useParams();

  const employeeGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const employeeType = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract Basis", label: "Contract Basis" },
    { value: "Other", label: "Other" },
  ];
  const employeeExperience = [
    { value: "01 Years", label: "01 Years" },
    { value: "02 Years", label: "02 Years" },
    { value: "03 Years", label: "03 Years" },
    { value: "04 Years", label: "04 Years" },
    { value: "05 Years", label: "05 Years" },
    { value: "06 Years", label: "06 Years" },
    { value: "07 Years", label: "07 Years" },
    { value: "08 Years", label: "08 Years" },
    { value: "09 Years", label: "09 Years" },
  ];

  const [employee, setEmployee] = useState([]);
  const [gender, setGender] = useState({});
  const [type, setType] = useState({});
  const [experience, setExperience] = useState({});
  const [fullName, setFullName] = useState(employee.fullName);
  const [nameWithInitials, setNameWithInitials] = useState(
    employee.nameWithInitials
  );
  const [displayName, setDisplayName] = useState(employee.displayName);
  const [dateOfBirth, setDateOfBirth] = useState(employee.dateOfBirth);
  const [email, setEmail] = useState(employee.email);
  const [mobile, setMobile] = useState(employee.mobile);
  const [designation, setDesignation] = useState(employee.designation);
  const [joinDate, setJoinDate] = useState(employee.joinDate);
  const [salary, setSalary] = useState(employee.salary);
  const [personalNotes, setPersonalNotes] = useState(employee.personalNotes);

  useEffect(() => {
    getSelectedEmployee(id).then((res) => {
      setEmployee(res);
      setGender({ label: res.gender, value: res.gender });
      setType({ label: res.eType, value: res.eType });
      setExperience({ label: res.experience, value: res.experience });
    });
  }, [id]);

  const setFullNameHandler = (data) => {
    setFullName(data);
  };
  const setNameWithInitialsHandler = (data) => {
    setNameWithInitials(data);
  };
  const setDisplayNameHandler = (data) => {
    setDisplayName(data);
  };
  const setDOBHandler = (data) => {
    setDateOfBirth(data);
  };
  const setEmailHandler = (data) => {
    setEmail(data);
  };
  const setMobileNumberHandler = (data) => {
    setMobile(data);
  };
  const setDesignationHandler = (data) => {
    setDesignation(data);
  };
  const setJoinDateHandler = (data) => {
    setJoinDate(data);
  };
  const setSalaryHandler = (data) => {
    setSalary(data);
  };
  const setPersonalNotesHandler = (data) => {
    setPersonalNotes(data);
  };

  function handleSubmit(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change Employee details!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((res) => {
      if (res.value === true) {
        updateEmployee({
          _id: id,
          fullName: fullName,
          nameWithInitials: nameWithInitials,
          displayName: displayName,
          gender: gender.label,
          dateOfBirth: dateOfBirth,
          email: email,
          mobile: mobile,
          designation: designation,
          eType: type.label,
          joinDate: joinDate,
          experience: experience.label,
          salary: salary,
          personalNotes: personalNotes,
        }).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Employee details updated successfully!",
              icon: "success",
              confirmButtonText: "Ok",
            });
            setTimeout(() => {
              window.location.replace("/");
            }, 2050);
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong!",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
      }
    });
  }

  return (
    <>
      <div>
        <div className="grid md:grid-cols-2 md:gap-6 justify-items-stretch  ">
          <h1 className=" mx-4 mt-4 text-lg font-bold">Update Employee</h1>
          <Link to={"/"}>
            <h1 className="justify-self-end mx-5 pl-96 ml-80 mt-2">X</h1>
          </Link>
        </div>
        <h1 className="mx-4  text-lg font-bold flex justify-center">
          {employee.fullName}
        </h1>
        <div className="mx-10">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="nameWithInitials" className=" text-fCol">
                Full Name
              </label>
              <FormInput
                value={employee.fullName}
                title="Full Name"
                onSetValue={setFullNameHandler}
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="nameWithInitials" className=" text-fCol ">
                  Name with initials*
                </label>
                <FormInput
                  value={employee.nameWithInitials}
                  title="Name with initials"
                  onSetValue={setNameWithInitialsHandler}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="preferredName" className=" text-fCol">
                  Preferred / Display Name
                </label>
                <FormInput
                  value={employee.displayName}
                  title="Display Name"
                  onSave={setDisplayNameHandler}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative  w-full mb-6 group">
                <label htmlFor="gender" className="text-fCol ">
                  Gender
                </label>
                <Select
                  options={employeeGender}
                  hideSelectedOptions={false}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  value={gender}
                  onChange={(e) => setGender(e)}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="date" className="text-fCol">
                  Date of Birth
                </label>
                <FormInputDate
                  value={employee.dateOfBirth}
                  title="Date of Birth"
                  onSave={setDOBHandler}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="email" className="text-fCol">
                  Email
                </label>
                <FormInput
                  value={employee.email}
                  title="Email"
                  onSave={setEmailHandler}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="floating_phone" className="text-fCol ">
                  Phone number
                </label>
                <FormInput
                  value={employee.mobile}
                  title="Email"
                  onSave={setMobileNumberHandler}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="Designation" className="text-fCol">
                  Designation
                </label>
                <FormInput
                  value={employee.designation}
                  title="Email"
                  onSave={setDesignationHandler}
                />
              </div>
              <div className="block  w-full mb-6 group  ">
                <label htmlFor="Etype" className="text-fCol ">
                  Employee Type
                </label>
                <Select
                  options={employeeType}
                  hideSelectedOptions={false}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  value={type}
                  onChange={(e) => setType(e)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="date" className="text-fCol ">
                  Join Date
                </label>
                <FormInputDate
                  value={employee.joinDate}
                  title="Date of Birth"
                  onSave={setJoinDateHandler}
                />
              </div>
              <div className="relative  w-full mb-6 group">
                <label htmlFor="experience" className=" text-fCol">
                  Experience
                </label>
                <Select
                  options={employeeExperience}
                  hideSelectedOptions={false}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  value={experience}
                  onChange={(e) => setExperience(e)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="Salary" className="text-fCol ">
                  Salary
                </label>
                <FormInput
                  value={employee.salary}
                  title="Email"
                  onSave={setSalaryHandler}
                />
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="personalNotes" className=" text-fCol">
                Personal Notes
              </label>
              <FormInput
                value={employee.personalNotes}
                title="Email"
                onSave={setPersonalNotesHandler}
              />
            </div>
            <div className="flex justify-end">
              <Link to={"/"}>
                <h1 className="mr-5 mt-3 text-fCol">Cancel</h1>
              </Link>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleSubmit(id)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

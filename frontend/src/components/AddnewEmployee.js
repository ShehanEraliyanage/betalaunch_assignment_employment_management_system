import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select";

//controllers
import { addEmployee } from "../controllers/employee";
import { reactBaseURL } from "../config";

export default function AddnewEmployee() {
  const [fullName, setFullName] = useState("");
  const [nameWithInitials, setNameWithInitials] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [personalNote, setPersonalNote] = useState("");

  console.log(salary);

  function handleSubmit() {
    if (
      fullName === "" ||
      nameWithInitials === "" ||
      dateOfBirth === "" ||
      email === "" ||
      phoneNumber === "" ||
      designation === "" ||
      employeeType === "" ||
      joinedDate === "" ||
      experience === "" ||
      salary === "" ||
      personalNote === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
    } else if (fullName === "" || fullName === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid name!",
      });
    } else if (nameWithInitials === "" || nameWithInitials === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid name with initials!",
      });
    } else if (preferredName === "" || preferredName === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid preferred name Or Display Name!",
      });
    } else if (gender === "" || gender === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a Gender!",
      });
    } else if (dateOfBirth === "" || dateOfBirth === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a Date of Birth!",
      });
    } else if (email === "" || email === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
      });
    } else if (phoneNumber === "" || phoneNumber === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid phone number!",
      });
    } else if (designation === "" || designation === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid designation!",
      });
    } else if (employeeType === "" || employeeType === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid employee type!",
      });
    } else if (joinedDate === "" || joinedDate === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid joined date!",
      });
    } else if (experience === "" || experience === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid experience!",
      });
    } else if (salary === "" || salary === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid salary!",
      });
    } else if (personalNote === "" || personalNote === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid personal note!",
      });
    } else {
      const newEmployee = {
        fullName: fullName,
        nameWithInitials: nameWithInitials,
        displayName: preferredName,
        gender: gender,
        dateOfBirth: dateOfBirth,
        email: email,
        mobile: phoneNumber,
        designation: designation,
        eType: employeeType,
        joinDate: joinedDate,
        experience: experience,
        Salary: salary,
        personalNotes: personalNote,
      };
      addEmployee(newEmployee);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Employee Added Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.replace(reactBaseURL + "/");
      }, 1000);
    }
  }

  return (
    <>
      <div>
        <div className="grid md:grid-cols-2 md:gap-6 justify-items-stretch  ">
          <h1 className=" mx-4 mt-4 text-lg font-bold">Add People</h1>
          <h1 className="justify-self-end mx-5">X</h1>
        </div>
        <div className="m-10">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="nameWithInitials" className=" text-fCol">
                Full Name*
              </label>
              <input
                type="text"
                name="full name"
                id="nameWithInitials"
                className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="nameWithInitials" className=" text-fCol ">
                  Name with initials*
                </label>
                <input
                  type="text"
                  name="nameWithInitials"
                  id="nameWithInitials"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setNameWithInitials(e.target.value)}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="preferredName" className=" text-fCol">
                  Preferred / Display Name
                </label>
                <input
                  type="text"
                  name="preferredName"
                  id="preferredName"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setPreferredName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative  w-full mb-6 group">
                <label htmlFor="gender" className="text-fCol ">
                  Gender
                </label>
                <Select
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg  border-gray-300 appearance-none text-black"
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                  onChange={(e) => {
                    setGender(e.value);
                  }}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="date" className="text-fCol">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="email" className="text-fCol">
                  Email
                </label>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name="email"
                  id="email"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="floating_phone" className="text-fCol ">
                  Phone number
                </label>
                <input
                  type="tel"
                  //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="Designation" className="text-fCol">
                  Designation
                </label>
                <input
                  type="text"
                  name="Designation"
                  id="Designation"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="block  w-full mb-6 group  ">
                <label htmlFor="Etype" className="text-fCol ">
                  Employee Type
                </label>
                <Select
                  className=""
                  options={[
                    { value: "Full Time", label: "Full Time" },
                    { value: "Part Time", label: "Part Time" },
                    { value: "Contract Basis", label: "Contract Basis" },
                    { value: "Other", label: "Other" },
                  ]}
                  onChange={(e) => {
                    setEmployeeType(e.value);
                  }}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="date" className="text-fCol ">
                  Join Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setJoinedDate(e.target.value)}
                />
              </div>
              <div className="relative  w-full mb-6 group">
                <label htmlFor="experience" className=" text-fCol">
                  Experience
                </label>
                <Select
                  className=""
                  options={[
                    { value: "01 Years", label: "01 Years" },
                    { value: "02 Years", label: "02 Years" },
                    { value: "03 Years", label: "03 Years" },
                    { value: "04 Years", label: "04 Years" },
                    { value: "05 Years", label: "05 Years" },
                    { value: "06 Years", label: "06 Years" },
                    { value: "07 Years", label: "07 Years" },
                    { value: "08 Years", label: "08 Years" },
                    { value: "09 Years", label: "09 Years" },
                  ]}
                  onChange={(e) => {
                    setExperience(e.value);
                  }}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="Salary" className="text-fCol ">
                  Salary
                </label>
                <input
                  type="text"
                  name="Salary"
                  id="Salary"
                  className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                  required
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <label htmlFor="personalNotes" className=" text-fCol">
                Personal Notes
              </label>
              <input
                type="text"
                name="personalNotes"
                id="personalNotes"
                className="block py-2.5 px-1 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none text-black"
                required
                onChange={(e) => setPersonalNote(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <h1 className="mr-5 mt-3 text-fCol">Cancel</h1>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}
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

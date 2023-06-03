import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Select from "react-select";
import ReactPaginate from "react-paginate";

//import Controller
import { getAllEmployees, deleteEmployee } from "../controllers/employee";

export default function EmployeeView() {
  const [employees, setEmployees] = useState([]);
  const [selectedType, setSelectedType] = useState("null");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    setTotalPages(5);
  }, []);

  useEffect(() => {
    getAllEmployees(currentPage, selectedType).then((res) => {
      setEmployees(res);
    });
  }, [currentPage, selectedType]);

  const employeeTypes = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract Basis", label: "Contract Basis" },
    { value: "Other", label: "Other" },
  ];

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected + 1);
  };

  function deleteHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value === true) {
        deleteEmployee(id).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Your file has been deleted",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }

  return (
    <>
      <div>
        <h1 className="mx-4 mt-4 text-lg font-bold border-b-2 pb-3">People</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-3 mx-4">
        <div className="mb-3 md:mb-0 md:mr-5">
          <Select
            options={employeeTypes}
            value={selectedType}
            onChange={handleTypeChange}
            placeholder="Select employee type"
          />
        </div>
        <div className="flex justify-center mb-3 md:mb-0">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to={"/Add"}>
              <button>Add People</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mx-4 mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="border-1">
              <th scope="col" className="py-3">
                <div className="flex items-center">Display name</div>
              </th>
              <th scope="col" className="py-3">
                <div className="flex items-center">Emp ID</div>
              </th>
              <th scope="col" className="py-3">
                <div className="flex items-center">Designation</div>
              </th>
              <th scope="col" className="py-3">
                <div className="flex items-center">emp Type</div>
              </th>
              <th scope="col" className="py-3">
                <div className="flex items-center">Experience</div>
              </th>
              <th scope="col">
                <div className="flex items-start"></div>
              </th>
              <th scope="col">
                <div className="flex items-start"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((value, index) => (
              <tr className="text-black border-2" key={index}>
                <td className="py-4 font-bold">{value.displayName}</td>
                <td className="py-3">{value.employeId}</td>
                <td className="py-3">{value.designation}</td>
                <td className="py-3">{value.eType}</td>
                <td className="py-3">{value.experience}</td>
                <Link to={"/update/" + value._id}>
                  <td className="text-eCol pt-4">Edit</td>
                </Link>
                <td className="text-dCol">
                  <button onClick={() => deleteHandler(value._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5">
        <ReactPaginate
          containerClassName="flex flex-row p-3 gap-x-2"
          pageClassName="px-3 py-2 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer"
          previousClassName="px-3 py-2 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer"
          nextClassName="px-3 py-2 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer"
          activeClassName="bg-blue-500 text-white"
          breakClassName="px-3 py-2 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer"
          breakLinkClassName="px-3 py-2 text-gray-700 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md cursor-pointer"
          pageCount={totalPages}
          onPageChange={handlePageClick}
          previousLabel="< previous"
          nextLabel="next >"
        />
      </div>
    </>
  );
}

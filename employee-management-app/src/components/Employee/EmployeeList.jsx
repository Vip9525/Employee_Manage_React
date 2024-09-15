import "bootstrap/dist/css/bootstrap.min.css";
import { getEmployees } from "./Services/EmployeeService";
import { useState,useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const EmployeeList = ({ selectedTab, setSelectedTab }) => {
    
    const [employees, setEmployees] = useState([]);
     const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      const response = await getEmployees();
      setEmployees(response.data);
      setLoading(false);
    };
    fetchEmployees();
  }, []);

  return (
    <>
      <div class="col-md-6 employee-data">
        <div class="card table-with-links">
          <div class="card-header text-center">
              <h2>Employee Data</h2>
          </div>
          <div class="card-body table-full-width">
            <table class="table">
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job Position</th>
                  <th class="text-right">Salary</th>
                  <th>BirthDay</th>
                  <th>Gender</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
              {employees.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.position}</td>
                  <td class="text-right">€ {employee.salary}</td>
                  <td class="text-right"> {employee.birthDay}</td>
                  <td class="text-right"> {employee.gender}</td>
                  <td class="td-actions text-right">
                  <FaUserEdit />
                  <MdDelete />
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;

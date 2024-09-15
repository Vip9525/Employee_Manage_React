import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Employee } from './Models/Employee';
import { createEmployee } from './Services/EmployeeService';
const AddEmployee = (props) => {

  const [data, setData] = useState({
    name: '',
    email: '',
    position: '',
    salary:'',
    birthDay:'',
    gender:''
    // Add more fields as needed
  });
      
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState(0);
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Employee Data : ",name,email,position,salary,birthDay,gender)
    // const employee = new Employee(name, email, position,salary,birthDay,gender);
    await createEmployee(data);
    // Redirect to employee list or display success message
  };

  const handleReset = () => {
    setData({
      name: '',
      email: '',
      phone: '',
      position:'',
      birthDay:'',
      gender:''
      
      // Reset all fields to their initial value
    });
  }
    return <>
         <div class="card">
              <div class="card-header"> 
              <h5 class="card-title text-center">Add Employee</h5>
              </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Name :</b></label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputText" value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })}/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Email :</b></label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })}/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Position :</b></label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" value={data.position} onChange={(event) => setData({ ...data, position: event.target.value })}/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Salary :</b></label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" value={data.salary} onChange={(event) => setData({ ...data, salary: event.target.value })}/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Birth Date :</b></label>
                  <div class="col-sm-10">
                    <input type="date" class="form-control" id="inputPassword" value={data.birthDay} onChange={(event) => setData({ ...data, birthDay: event.target.value })}/>
                  </div>
                </div>
                <fieldset class="row mb-3">
                  <legend class="col-form-label col-sm-2 pt-0"><b>Gender :</b></legend>
                  <div class="col-sm-10">
                  <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"
                  checked={data.gender === 'Male'}
                   onChange={(event) => setData({...data,gender:event.target.value})}/>
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                     </div>
                 <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"
                checked={data.gender === 'Female'}
                onChange={(event) => setData({...data,gender:event.target.value})}/>
                  <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
 
                  </div>
                </fieldset>
              
                <div class="text-center">
                  <button type="submit" class="btn btn-primary m-2">Submit</button>
                  <button type="reset" class="btn btn-secondary" onClick={handleReset}>Reset</button>
                </div>
              </form>

            </div>
          </div>
    </>
}

export default AddEmployee;
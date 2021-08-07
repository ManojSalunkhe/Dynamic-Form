import './App.css'
import { useState } from 'react'
import EmployeeContainer from './form/EmployeeContainer';
import { Button } from 'react-bootstrap';
import ViewData from './form/ViewData';
import swal from 'sweetalert'
import './style.css'

function App() {

  const [data, setData] = useState([{ id: Number(new Date()), name: '', designation: '', contact: [], skill: [], dob: '' }])
  const [toggle, setToggle] = useState(false)

  
  // validates the form
  const validations = () => {
    const result = data.every((ele) => {
      let status
      if (ele.name.length > 0 && ele.designation.length > 0 && ele.contact[0].value.length === 10 && ele.skill[0].value.length > 0 && ele.dob) {
        status = true
      }
      return status
    })
    result ? setToggle(!toggle) : swal('error', 'all the input fields mandatory', 'error')
  }

  const handleSubmit = () => {
    validations()
  }

  // adds more forms 
  const handleAddForm = () => {
    setData([...data, { id: Number(new Date()), name: '', designation: '', contact: [], skill: [], dob: '' }])
  };

  // updating the global state data
  const handleChange = (id, field, value) => {
    const property = field;
    const newData = data.map(employee => {
      if (employee.id === id) {
        employee[property] = value;
      }
      return employee;
    });
    setData(newData);
  }
  console.log(data)

  return (
    <div>
      <div className="container row" >
        <div className="col md-6">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Employee Data</h1><hr />
          {data.map(employee => {
            return (
              <EmployeeContainer handleChange={handleChange} id={employee.id} key={employee.id} ></EmployeeContainer>
            );
          })}
          <Button className="col md-12 mt-4" variant="success" onClick={handleSubmit}>View data</Button>
          <Button className="col md-12 mt-3" onClick={handleAddForm}>AddForm</Button>
        </div>
      </div>
      <div className="col md-6" style={{ paddingLeft: "20px" }}>
        {toggle && <ViewData data={data} toggle={toggle} />}
      </div>
    </div>
  )
}

export default App;

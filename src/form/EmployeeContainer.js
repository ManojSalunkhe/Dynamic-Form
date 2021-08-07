import React from 'react'
import Name from './Name'
import Designation from './Designation'
import Contacts from './Contacts'
import Skills from './Skills'
import Date from './Date'
import '../style.css'

function EmployeeContainer({ handleChange, id }) {
    return (
        <div className="employeeContainer">
            <div className="row mt-3">
                <Name id={id} handleChange={handleChange} label="Name" />
                <Designation id={id} handleChange={handleChange} label="Designation" />
            </div>
            <div className="row mt-3" style={{marginLeft : "0px"}}>
                <Contacts id={id} handleChange={handleChange} />
            </div>
            <div className="row mt-3">
                <Skills id={id} handleChange={handleChange} />
                <Date id={id} handleChange={handleChange} />
            </div>
        </div>
    )
}

export default EmployeeContainer
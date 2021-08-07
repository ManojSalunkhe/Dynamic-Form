import React from 'react'
import { Form } from 'react-bootstrap'

function Designation({ handleChange, id, label }) {

    //handle designation change
    const handleDesignationChange = (event) => {
        handleChange(id, 'designation', event.target.value);
    }

    return (
        <div className="col-md-6">
            <Form.Control type="text" onChange={event => handleDesignationChange(event)} placeholder={label + ' *'} />
        </div>
    )
}

export default Designation
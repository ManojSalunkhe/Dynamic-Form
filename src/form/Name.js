import React from 'react'
import { Form } from 'react-bootstrap'
import '../style.css'
function Name({ handleChange, id, label }) {

    //handle name change
    const handleNameChange = (event) => {
        handleChange(id, 'name', event.target.value);
    }

    return (
        <div className="col-md-6">
            <Form.Control type="text" onChange={event => handleNameChange(event)} placeholder={label + ' *'} />
        </div>
    )
}

export default Name
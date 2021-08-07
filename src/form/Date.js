import React, { useState } from 'react'
import {Form} from 'react-bootstrap'

function Date({ handleChange, id }) {
    const [date, setDate] = useState('')

    //handle date change
    const handleDateChange = (event)=>{
        setDate(event.target.value)
        handleChange(id,"dob",event.target.value)
    }

    return (
        <div className="col-md-6">
            <Form.Control  type="date" value={date} onChange={(event)=>handleDateChange(event,date)} placeholder="date of birth" />
        </div>
    )
}

export default Date
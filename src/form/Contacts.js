import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import swal from 'sweetalert'

function Contacts({ handleChange, id: employeeId }) {
    const [type, setType] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [contactDetails, setContactDetails] = useState([{ id: Number(new Date()), label: "Primary", value: "" }])

    //handling the type of contact
    const handleTypeChange = (event) => {
        setButtonDisabled(false)
        setType(event.target.value)
    }

    //adding contact filed
    const addContact = () => {
        if (contactDetails.length < 4) {
            const newContactDetails = [...contactDetails, { id: Number(new Date()), label: type, value: "" }]
            setContactDetails(newContactDetails)
        }
        if (contactDetails.length >= 4) {
            swal("Error", "You cannot add more contacts!", "error");
        }
    }

    //removing contact field
    const removeContact = (id) => {
        const newContactDetails = contactDetails.filter(c => {
            return c.id !== id
        })
        setContactDetails(newContactDetails)
        swal('', "skill removed!", "success")
    }

    //handling the data entered in the contact filed
    const handleContactChange = (id, event) => {
        const newContactDetails = contactDetails.map(contact => {
            if (contact.id === id) {
                contact.value = event.target.value
            }
            return contact
        })
        setContactDetails(newContactDetails)
        handleChange(employeeId, 'contact', newContactDetails)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    return (
        <div className="col-mt-4">
            <Form>
                {
                    contactDetails.map(contact => {
                        return (
                            <div key={contact.id} className="mt-3 mb-3">
                                <Form.Control
                                    type="number"
                                    onChange={event => handleContactChange(contact.id, event)}
                                    placeholder={contact.label + ' *'}
                                />
                                <Button className="mt-3" variant="danger" disabled={contactDetails.length <= 1} onClick={() => removeContact(contact.id)}>Remove Contact</Button>
                            </div>
                        )
                    })
                }
            </Form>
            <Form.Select value={type} onChange={(event) => handleTypeChange(event)}>
                <option value="">choose typeOf additional contact number</option>
                <option value="Emergency">Emergency</option>
                <option value="Secondary">Secondary</option>
                <option value="Residence">Residence</option>
            </Form.Select>
            <Button className="ml-4" disabled={buttonDisabled} onClick={addContact}>Add more contacts</Button>
        </div>
    )
}

export default Contacts
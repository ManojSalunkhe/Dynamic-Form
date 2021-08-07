import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import fileDownload from "js-file-download";

function ViewData({ data, toggle }) {

    const [status, setStatus] = useState(toggle)

    // printing the data in .txt
    const handleDownload = () => {
        fileDownload(JSON.stringify(data), "Data.txt");
    }

    // allows to close the model popup
    const handleCancel = () => {
        setStatus(false)
    }

    return (
        <div>
            <Modal show={status} onHide={handleCancel} style={{ backgroundColor: 'black' }} >
                {
                    data.map((d, i) => {
                        return (
                            <div key={d.id}>
                                <Modal.Header> <h1>Employee #{i + 1}</h1></Modal.Header>
                                <Modal.Body>
                                    <p>Name : {d.name}</p>
                                    <p>Designation : {d.designation}</p>
                                    <p>Contact : {d.contact.map((c) => {
                                        return <div>
                                            <p>type : {c.label}</p>
                                            <p>phone : {c.value}</p>
                                        </div>
                                    })}</p>
                                    <p>Skill : {d.skill.map((s) => {
                                        return <p>{s.value}</p>
                                    })}</p>
                                    <p>Date of birth :{d.dob}</p>
                                </Modal.Body>
                            </div>
                        )
                    })
                }
                <Modal.Footer>
                    <Button className="ml-4" variant="danger" onClick={handleDownload}>Download</Button>
                    <Button onClick={handleCancel} >Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewData
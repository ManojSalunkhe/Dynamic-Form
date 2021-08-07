import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import swal from 'sweetalert';


function Skills({ handleChange, id: employeeId }) {

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [skills, setSkills] = useState([{ id: Number(new Date()), value: "" }])

    // adding skill fields
    const addSkills = () => {
        const newSkills = [...skills, { id: Number(new Date()), value: "" }]
        setSkills(newSkills)
    }

    // removing skills field
    const removeSkills = (id) => {
        const newSkills = skills.filter(skill => {
            return skill.id !== id
        })
        setSkills(newSkills)
        swal('', "skill removed!", "success")
    }

    //handling the data entered in the skills filed
    const handleSkillChange = (id, event) => {
        setButtonDisabled(false)
        const newSkills = skills.map(skill => {
            if (skill.id === id) {
                skill.value = event.target.value
            }
            return skill
        })
        setSkills(newSkills)
        handleChange(employeeId, 'skill', skills)
    }

    return (
        <div className="col-md-6">
            <Form >
                <Form.Group>
                    {
                        skills.map(skill => {
                            return (
                                <div key={skill.id}>
                                    <Form.Control type="text" onChange={event => handleSkillChange(skill.id, event)} placeholder="skills *" /><br />
                                    <Button className="mb-2" disabled={skills.length <= 1} onClick={() => removeSkills(skill.id)} variant="danger">Remove skill</Button>
                                </div>
                            )
                        })
                    }
                    <Button className="mt-3" disabled={buttonDisabled} onClick={addSkills}>Add Skill</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Skills
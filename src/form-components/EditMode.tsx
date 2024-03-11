import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

    const toggleEditMode = () => setEditMode(!inEditMode);

    const handleNameChange = (event: ChangeEvent) =>
        setName(event.target.value);

    const handleStudentChange = (event: ChangeEvent) =>
        setIsStudent(event.target.checked);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit"
                    checked={inEditMode}
                    onChange={toggleEditMode}
                />
            </div>

            {inEditMode ? (
                <Form.Group controlId="FormPersonName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={handleNameChange} />
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                </Form.Group>
            ) : (
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}

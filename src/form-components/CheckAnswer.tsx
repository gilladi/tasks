import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface CheckAnswerProps {
    expectedAnswer: string;
}
export function CheckAnswer({ expectedAnswer }: CheckAnswerProps): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checking-answer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}

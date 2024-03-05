import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function toggleQuestionType(): void {
        setQuestionType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }

    return (
        <div>
            <div>
                Current question type:{" "}
                <span>
                    {questionType === "multiple_choice_question"
                        ? "Multiple Choice"
                        : "Short Answer"}
                </span>
                <Button onClick={toggleQuestionType}>Change Type</Button>
            </div>
        </div>
    );
}

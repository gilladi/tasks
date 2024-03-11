import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "magenta",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>("blue");
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorOption) => (
                <div key={colorOption} style={{ display: "inline-block" }}>
                    <Form.Check
                        type="radio"
                        id={`radio-${colorOption}`}
                        label={colorOption}
                        name="color"
                        value={colorOption}
                        inline={true}
                        style={{ backgroundColor: colorOption }}
                        onChange={() => setColor(colorOption)}
                    />
                </div>
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}

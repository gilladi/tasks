import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [firstDie, setFirstDie] = useState<number>(6);
    const [secondDie, setSecondDie] = useState<number>(3);

    return (
        <div>
            <span data-testid="left-die">{firstDie} </span>
            <span data-testid="right-die">{secondDie} </span>
            <Button onClick={() => setFirstDie(d6())}>Roll Left</Button>
            <Button onClick={() => setSecondDie(d6())}>Roll Right</Button>
            {firstDie === 1 && secondDie === 1 ? <div>Lose</div> : ""}
            {firstDie == secondDie && firstDie != 1 && <div>Win</div>}
        </div>
    );
}

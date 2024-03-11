import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄 Christmas",
    NewYear = "🎉 New Year",
    IndependenceDay = "🎆 Independence Day",
    Easter = "🐰 Easter",
    Thanksgiving = "🦃 Thanksgiving"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Christmas
    );

    const getNextAlphabeticalHoliday = (current: Holiday): Holiday => {
        const allHolidays = Object.values(Holiday);
        const currentIndex = allHolidays.indexOf(current);
        const nextIndex = (currentIndex + 1) % allHolidays.length;
        return allHolidays[nextIndex];
    };

    const getNextYearlyHoliday = (current: Holiday): Holiday => {
        const yearlyOrder: Holiday[] = [
            Holiday.NewYear,
            Holiday.Easter,
            Holiday.IndependenceDay,
            Holiday.Thanksgiving,
            Holiday.Christmas
        ];

        const currentIndex = yearlyOrder.indexOf(current);
        const nextIndex = (currentIndex + 1) % yearlyOrder.length;
        return yearlyOrder[nextIndex];
    };

    const handleAlphabeticalAdvance = () => {
        const nextHoliday = getNextAlphabeticalHoliday(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    const handleYearlyAdvance = () => {
        const nextHoliday = getNextYearlyHoliday(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={handleAlphabeticalAdvance}>
                Advance by Alphabet
            </Button>
            <Button onClick={handleYearlyAdvance}>Advance by Year</Button>
        </div>
    );
}

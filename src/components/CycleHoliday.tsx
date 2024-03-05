import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Enum for holidays
enum Holiday {
    Christmas = "🎄 Christmas",
    NewYear = "🎉 New Year",
    IndependenceDay = "🎆 Independence Day",
    Easter = "🐰 Easter",
    Thanksgiving = "🦃 Thanksgiving"
}

export function CycleHoliday(): JSX.Element {
    // State to keep track of the current holiday
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Christmas
    );

    // Function to get the next holiday alphabetically
    const getNextAlphabeticalHoliday = (current: Holiday): Holiday => {
        const allHolidays = Object.values(Holiday);
        const currentIndex = allHolidays.indexOf(current);
        const nextIndex = (currentIndex + 1) % allHolidays.length;
        return allHolidays[nextIndex];
    };

    // Function to get the next holiday in the year
    const getNextYearlyHoliday = (current: Holiday): Holiday => {
        // Define the order of holidays in the year
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

    // Function to handle clicking the "Advance by Alphabet" button
    const handleAlphabeticalAdvance = () => {
        const nextHoliday = getNextAlphabeticalHoliday(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    // Function to handle clicking the "Advance by Year" button
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

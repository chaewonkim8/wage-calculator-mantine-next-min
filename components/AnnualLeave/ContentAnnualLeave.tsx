// // ContentAnnualLeave.tsx

import React, { useState, useEffect } from 'react';
import { useToggle } from '@mantine/hooks';
import InputBox from './InputBox';
import ResultBox from './ResultBox';
import { MS_PER_YEAR } from '../../constants';

interface Props {
    boxType: string;
    handleToggle: () => void;
}

export default function ContentAnnualLeave() {
    const [boxType, toggle] = useToggle(['input', 'result']);
    const [annualLeaves, setAnnualLeaves] = useState<number | 0>(0);
    const [yearsOfService, setYearsOfService] = useState<number | 0>(0);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Handle boxType toggle
    const handleToggle = () => {
        toggle();
        console.log(boxType);
    };

    const calculateYearsOfService = (startDate: Date | null, endDate: Date | null): number => {
        if (startDate && endDate) {
            const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
            const monthsDiff = endDate.getMonth() - startDate.getMonth();
            const daysDiff = endDate.getDate() - startDate.getDate();

            let years = yearsDiff;

            // Check if end date is earlier in the same month
            if (monthsDiff === 0 && daysDiff < 0) {
                years -= 1;
                const lastMonthDays = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
                const remainingDays = lastMonthDays - startDate.getDate() + 1 + endDate.getDate();
                return years + (remainingDays / lastMonthDays) / 12;
            }

            const startDateDaysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
            return years + (monthsDiff + daysDiff / startDateDaysInMonth) / 12; // Consider partial months as fractions of a year
        }

        return 0;
    };
    // Function to calculate entitled annual leaves
    // const calculateEntitledAnnualLeaves = (yearsOfService: number): number => {
    //     if (yearsOfService < 1) {
    //         return 0; // No entitlement for less than 1 year of service
    //     }

    //     if (yearsOfService <= 2) {
    //         return 7; // 7 days for the first 2 years
    //     } else if (yearsOfService < 9) {
    //         return 7 + (yearsOfService - 2); // 7 days for the first 2 years, plus 1 additional day for each year from year 3 to year 8
    //     } else {
    //         return 12; // 12 days for 9 or more years of service
    //     }
    // };

    // Function to calculate entitled annual leaves with consideration for partial years

    const calculateEntitledAnnualLeaves = (yearsOfService: number): number => {
        // Calculate annual leave entitlement for a full year
        const annualLeavePerYear = (year: number) => {
            if (year <= 2) {
                return 7; // 7 days for the first 2 years
            } else if (year < 9) {
                return 8; // 8 days for years 3 to 8
            } else {
                return 14; // 14 days for 9 or more years
            }
        };

        // Calculate the integer part (full years) and fractional part (partial year)
        const fullYears = Math.floor(yearsOfService);
        const partialYear = yearsOfService - fullYears;

        // Calculate annual leave for full years
        let entitledForFullYears = 0;
        for (let year = 1; year <= fullYears; year++) {
            entitledForFullYears += annualLeavePerYear(year);
        }

        // Calculate annual leave for the partial year as a fraction of a full year
        const entitledForPartialYear = partialYear * annualLeavePerYear(fullYears + 1);

        return entitledForFullYears + entitledForPartialYear;
    };

    // Function to calculate accumulated annual leaves
    const calculateAccumulatedAnnualLeaves = (yearsOfService: number): number => {
        let accumulatedLeaves = 0;

        // Calculate the integer part (full years) and fractional part (partial year)
        const fullYears = Math.floor(yearsOfService);
        const partialYear = yearsOfService - fullYears;

        // Calculate annual leave for full years
        for (let year = 1; year <= fullYears; year++) {
            accumulatedLeaves += calculateEntitledAnnualLeaves(year);
        }

        // Calculate annual leave for the partial year as a fraction of a full year
        accumulatedLeaves += partialYear * calculateEntitledAnnualLeaves(fullYears + 1);

        return accumulatedLeaves;
    };



    // Function to calculate accumulated annual leaves
    // const calculateAccumulatedAnnualLeaves = (yearsOfService: number): number => {
    //     let accumulatedLeaves = 0;

    //     for (let year = 1; year <= yearsOfService; year++) {
    //         accumulatedLeaves += calculateEntitledAnnualLeaves(year);
    //     }

    //     return accumulatedLeaves;
    // };

    // Source of information: https://www.labour.gov.hk/eng/faq/cap57i_whole.htm

    useEffect(() => {
        if (startDate && endDate) {
            const updatedYearsOfService = calculateYearsOfService(startDate, endDate);
            const updatedAnnualLeaves = calculateAccumulatedAnnualLeaves(updatedYearsOfService);
            setYearsOfService(updatedYearsOfService);
            setAnnualLeaves(updatedAnnualLeaves);
        }
    }, [startDate, endDate]);

    return (
        <>
            {boxType === 'input' ? (
                <InputBox
                    boxType={boxType}
                    handleToggle={handleToggle}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />
            ) : (
                <ResultBox
                    boxType={boxType}
                    handleToggle={handleToggle}
                    annualLeaves={annualLeaves}
                    yearsOfService={yearsOfService}
                    startDate={startDate}
                    endDate={endDate}
                />
            )}
        </>
    );
}

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

    // Calculate years of service based on start and end dates
    const calculateYearsOfService = (startDate: Date | null, endDate: Date | null) => {
        if (startDate && endDate) {
            return (endDate.getTime() - startDate.getTime()) / MS_PER_YEAR;
        }
        return 0;
    };


    // Calculate annual leave entitlement based on years of service
    const calculateAnnualLeaves = (yearsOfService: number): number => {
        if (yearsOfService < 1) {
            return 0; // No entitlement for less than 1 year of service
        } else if (yearsOfService < 3) {
            return 7;
        } else if (yearsOfService < 9) {
            return 7 + Math.floor(yearsOfService - 2);
        } else {
            return 14; // Maximum of 14 days for 9 or more years of service
        }
    };

    // Source of information: https://www.labour.gov.hk/eng/faq/cap57i_whole.htm

    useEffect(() => {
        if (startDate && endDate) {
            const updatedYearsOfService = calculateYearsOfService(startDate, endDate);
            const updatedAnnualLeaves = calculateAnnualLeaves(updatedYearsOfService);
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

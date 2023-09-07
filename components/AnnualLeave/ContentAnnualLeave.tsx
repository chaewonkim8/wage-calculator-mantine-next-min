// ContentAnnualLeave.tsx

import { useState } from 'react';
import { useToggle } from '@mantine/hooks';
import { Text } from "@mantine/core"
import InputBoxAnnualLeave from './InputBoxAnnualLeave'
import ResultBoxAnnualLeave from './ResultBoxAnnualLeave'

interface Props {
    boxType: string,
    handleToggle: () => void,
}

export default function ContentAnnualLeave() {
    const [boxType, toggle] = useToggle(['input', 'result']);
    const handleToggle = () => {
        toggle();
        console.log(boxType)
    };

    return (
        <>
        {boxType === 'input' ? (
            <InputBoxAnnualLeave 
                boxType={boxType}
                handleToggle={handleToggle}
            />
        ) : (
            <ResultBoxAnnualLeave 
                boxType={boxType}
                handleToggle={handleToggle}
            />
        )}
    </>
    );
}

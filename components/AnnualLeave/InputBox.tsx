// InputBox.tsx
import { useState, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import WorkDateInput from './WorkDateInput';

interface Props {
    boxType: string,
    handleToggle: () => void,
    startDate: Date | null,
    setStartDate: (date: Date | null) => void,
    endDate: Date | null,
    setEndDate: (date: Date | null) => void,
}


export default function InputBox({ boxType, handleToggle, startDate, setStartDate, endDate, setEndDate }: Props) {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >

                <Box
                    p="xl"
                    m="lg"
                    mt="xl"
                    sx={(theme) => ({
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                        borderRadius: theme.radius.md,
                        // boxShadow: 'offset-x , offset-y , blur-radius , spread-radius , color' ,
                        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
                    })}
                >
                    <Text
                        align="left"
                        size="lg"
                        weight={250}
                        mt="xs"
                        mb="sm"
                        sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[5],
                        })}
                    >
                        Tell us your work dates
                    </Text>

                    <WorkDateInput
                        label="Start working date"
                        value={startDate}
                        onChange={setStartDate} />

                    <WorkDateInput
                        label="End working date"
                        value={endDate}
                        onChange={setEndDate} />
                    <Button
                        fullWidth
                        m="auto"
                        size="md"
                        radius="md"
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                        onClick={handleToggle}
                    >
                        calculate my annual leaves
                    </Button>
                </Box>


            </motion.div>
        </>
    );
};
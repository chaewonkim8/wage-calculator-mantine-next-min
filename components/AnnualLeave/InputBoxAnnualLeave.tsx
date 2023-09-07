// InputBoxAnnualLeave.tsx
import { useState, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface Props {
    boxType: string,
    handleToggle: () => void,
    // handleClose: () => void,
}

export default function InputBoxAnnualLeave({ boxType, handleToggle }: Props) {

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
                        This is an InputBox
                    </Text>

                    <Text
                        align="left"
                        size="lg"
                        weight={250}
                        mt="xl"
                        mb="sm"
                        sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[5],
                        })}
                    >
                        Tell us your work dates
                    </Text>
                    <DatePickerInput
                        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                        clearable
                        dropdownType="modal"
                        placeholder="Pick date"
                        size="sm"
                        miw={250}
                        my="md"
                    />
                    <Button
                        onClick={handleToggle}
                    >
                        calculate my annual leaves
                    </Button>
                </Box>


            </motion.div>
        </>
    );
};
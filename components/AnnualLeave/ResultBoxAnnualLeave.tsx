// ResultBoxAnnualLeave.tsx
import { useState, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { motion } from 'framer-motion';

interface Props {
    boxType: string,
    handleToggle: () => void,
    // handleClose: () => void,
}

export default function ResultBoxAnnualLeave({boxType, handleToggle}: Props) {

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
                        This is a ResultBox
                    </Text>

                    <Text
                    align="left"
                    size="xl"
                    fw={700}
                    mt="lg"
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                    })}
                >
                    Your Annual Leaves 
                </Text>

                <Text
                    ta="left"
                    fz="lg"
                    fw={700}
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "#90D2FF" : theme.colors.blue[6],
                    })}
                    mb="lg"
                > 
                    32 Days
                </Text>
                    <Button
                        onClick={handleToggle}
                    >
                        calculate again
                    </Button>
                </Box>


            </motion.div>
        </>
    );
};
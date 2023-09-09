// ResultBox.tsx
import { useState, useEffect } from 'react';
import { Box, Text, Button, Divider, SimpleGrid, Group, useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import PrintPDF from './PrintPDF';

interface Props {
    boxType: string,
    handleToggle: () => void,
    annualLeaves: number | 0,
    yearsOfService: number | 0,
    startDate: Date | null,
    endDate: Date | null,
}

export default function ResultBox({ boxType, handleToggle, annualLeaves, yearsOfService, startDate, endDate}: Props) {
    const theme = useMantineTheme();
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
                        {annualLeaves} Days
                    </Text>
                    <Divider
                        my="lg"
                        size="sm"
                    />

                    <SimpleGrid
                        cols={2}
                        spacing="xl"
                        verticalSpacing="xs"
                        mb="xl"
                        color='white'
                    >
                        <Text fz="sm" sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                        })}>
                            Years of service </Text>
                        <Text sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                        })}>
                            {(yearsOfService).toFixed(2)} years </Text>
                    </SimpleGrid>

                    <Group position="center">
                        <PrintPDF
                            annualLeaves={annualLeaves}
                            yearsOfService={yearsOfService}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </Group>

                    <Button
                        onClick={handleToggle}
                        fullWidth
                        m="auto"
                        mt="xs"
                        size="md"
                        radius="md"
                        variant={theme.colorScheme === 'dark' ? "white" : "filled"}
                        color='dark'
                    >
                        calculate again
                    </Button>
                </Box>
            </motion.div>
        </>
    );
};
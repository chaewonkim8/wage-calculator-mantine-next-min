import { useState } from 'react';
import {
    Text,
    useMantineTheme,
    Box,
    Title,
    Image,
    Button
} from '@mantine/core';
import { motion } from 'framer-motion';
import Navigation from '../Navigation';

export default function FrontPageBox() {
    const theme = useMantineTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >

            <Box
                p="xl"
                m="xs"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0],
                    borderRadius: theme.radius.md,
                    // boxShadow: 'offset-x , offset-y , blur-radius , spread-radius , color' ,
                    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
                })}
            >

                <Title
                    align="left"
                    order = {1}
                    // size="xl"
                    // fw={700}
                    mt="xs"
                    mb="xs"
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.blue[9],
                    })}
                >
                    Worker's Calculator
                </Title>

                <Text
                    ta="left"
                    fz="lg"
                    fw={400}
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "#90D2FF" : theme.colors.blue[9],
                    })}
                    mb="xs"
                    mt="xs"
                >
                    Designed to empower the migrant workers of Hong Kong
                </Text>
                <Image 
                    alt = "cover image"
                    src = '/images/calculator.jpg'
                    mb = "xs"
                    mt = "xs"
                    radius="md"
                    withPlaceholder
                />
                <Navigation/>
            </Box>


        </motion.div>
    );
}




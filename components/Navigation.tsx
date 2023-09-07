import { SimpleGrid, Button } from '@mantine/core';

export default function Navigation() {
    return (
        <SimpleGrid
            cols={1}
            spacing="xl"
            verticalSpacing="xs"
            mb="xl"
            color='white'
        >
            <Button
                component="a"
                href="/AnnualLeave"
                fullWidth
                size="md"
                radius="md"
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
            >
                Annual Leave
            </Button>
            <Button
                component="a"
                href="/LongServicePayment"
                fullWidth
                size="md"
                radius="md"
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
            >
                Long Service Payment
            </Button>
        </SimpleGrid >
    );
};


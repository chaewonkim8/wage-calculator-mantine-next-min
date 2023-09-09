import { Title, Text, Divider, Flex, Button } from "@mantine/core"
import { ThemeToggle } from "../ThemeToggle"

export default function Header() {
    return (
        <>
            <Flex
                m="xl"
                mb="xs"
                justify="space-between"
            >
                <Title
                    align="left"
                    size="h2"
                    fw={700}
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[4],
                    })}
                >
                    Annual Leave
                </Title>

                <ThemeToggle />
            </Flex>

            <Divider my="xl" size="xs" />

            <Text
                align="left"
                size="md"
                weight={330}
                mt="xs"
                ml="xl"
                mb="xl"
                mx="xl"
                sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[9],
                })}
            >
                Calculate your annual leaves based on the labor laws of Hong Kong
            </Text>
        </>
    )
}
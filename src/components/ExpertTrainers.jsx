import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function ExpertTrainers() {
    const trainers = [
        {
            name: "Ananya Desai",
            role: "English Faculty",
            img: "/trainer1.jpg", // Replace with actual image
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
        {
            name: "Avinash Shukla",
            role: "English Faculty",
            img: "/trainer2.jpg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        },
    ];

    return (
        <Box bg="white" py={12} px={4}>
            <Heading
                as="h2"
                textAlign="center"
                mb={10}
                color="#003366"
                fontSize={{ base: "24px", md: "36px" }}
                fontWeight="bold"
            >
                Our Expert Trainers
            </Heading>

            <Flex
                justify="center"
                align="center"
                wrap="wrap"
                gap={8}
                maxW="1200px"
                mx="auto"
            >
                {trainers.map((trainer, index) => (
                    <Box
                        key={index}
                        bg="white"
                        boxShadow="md"
                        borderRadius="lg"
                        p={6}
                        w={{ base: "100%", md: "48%" }}
                        maxW="470px"
                        transition="all 0.3s ease"
                        _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
                    >
                        <Flex align="center" mb={4}>
                            <Image
                                src={trainer.img}
                                alt={trainer.name}
                                borderRadius="full"
                                boxSize={{ base: "60px", md: "70px" }}
                                mr={4}
                                objectFit="cover"
                            />
                            <Box>
                                <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
                                    {trainer.name}
                                </Text>
                                <Text color="#1a46e4" fontSize={{ base: "sm", md: "md" }}>
                                    {trainer.role}
                                </Text>
                            </Box>
                        </Flex>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            color="gray.700"
                            lineHeight="1.7"
                        >
                            {trainer.description}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}

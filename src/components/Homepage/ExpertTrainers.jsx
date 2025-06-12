import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function ExpertTrainers() {
    const trainers = [
        {
            name: "Ananya Desai",
            role: "English Faculty",
            img: "/trainer1.jpg", // Replace with actual image
            description:
                "With 30 years of teaching experience behing her, Mrs. Desai dispenses expert tips and techniques to for the GRE Verbal and AWA sections that engage students across all diaspora. When it comes to the much dreaded speaking section of TOFEL, there's no looking beyond her. Her technical mentioshup is also highly sought after by students from all corners of the country and beyond.",
        },
        {
            name: "Avinash Shukla",
            role: "English Faculty",
            img: "/trainer2.jpg",
            description:
                "Attunded to students requirnments, Mr. Andhari makes Math fun! Never taking Math fundamentals for granted, he upwraps every topic from scratch and extracts tons of practice from aspirants His unbridled love fot he subject puts every student at ease. This yound albeit dedicated faculty has a strong student connect that makes his pedagogy very accessible too",
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
                gap={12}
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
                        maxW="550px"
                        minH="320px"
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
                            lineHeight="1.5"
                        >
                            {trainer.description}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}

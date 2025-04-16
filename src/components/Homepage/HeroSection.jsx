// components/HeroSection.jsx
import React from "react";
import {
    Box,
    Text,
    Heading,
    Button,
    Image,
    Container,
} from "@chakra-ui/react";
import heroImage from "../../img/bannerphotos/edit2.jpg"; // Adjust path if needed

export default function HeroSection() {
    return (
        <Box px={4} py={8}>
            <Container maxW="8xl" px={0}>
                <Box position="relative" borderRadius="2xl" overflow="hidden">
                    <Image
                        src={heroImage} // replace this with your image path
                        alt="Hero Image"
                        w="100%"
                        h={{ base: "400px", md: "600px" }}
                        objectFit="cover"
                    />

                    {/* Overlay */}
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="100%"
                        h="100%"
                        bg="rgba(0, 0, 0, 0.3)" // optional dim layer for better text contrast
                    />

                    {/* Text Overlay */}
                    <Box
                        position="absolute"
                        top={{ base: "10%", md: "20%" }}
                        left={{ base: "5%", md: "8%" }}
                        color="white"
                        zIndex={2}
                        maxW={{ base: "90%", md: "50%" }}
                    >
                        <Text
                            fontSize="sm"
                            fontWeight="medium"
                            textTransform="uppercase"
                            fontFamily="Montserrat"
                            mb={2}
                        >
                            SKY IS NOT THE LIMIT
                        </Text>
                        <Heading
                            as="h1"
                            fontSize={{ base: "32px", md: "48px", lg: "76px" }}
                            fontWeight="800"
                            fontFamily="Montserrat"
                            lineHeight="1.2"
                            mb={6}
                        >
                            ONE STEP AHEAD <br /> THIS SEASON
                        </Heading>

                        <Button
                            bg="#134BE4"
                            color="white"
                            size="lg"
                            fontFamily="Montserrat"
                            fontWeight="500"
                            fontSize="16px"
                            _hover={{ bg: "#0f3fbe" }}
                            borderRadius="md"
                        >
                            WHAT WE OFFER
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

import { Box, Heading, Text, Button, Flex, Image,  SimpleGrid } from "@chakra-ui/react";
import Navbar from "./Homepage/Navbar";
import Footer from "./Homepage/Footer";
import speaker from "../theme/speaker.png"; // adjust path as needed
import topBg from "../theme/aboutusbg.png"; // your blue background image

export default function AboutUs() {
    return (
        <Box>
            <Navbar />

            {/* Hero Section with Background Image */}
            <Box
                bgImage={`url(${topBg})`}
                bgSize="cover"
                bgPosition="center"
                color="white"
                py={20}
                textAlign="center"
            >
                <Heading fontSize="76px" fontWeight="bold">ABOUT US</Heading>
                <Text mt={2} fontSize="14px">HOME / ABOUT US</Text>
            </Box>

            {/* Content Section */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="start"
                justify="center"
                px={{ base: 4, md: 16 }}
                pt={12}
                pb={20}
                gap={8}
            >
                {/* Left Image with Blue Square Decoration */}
                <Box position="relative" flex="1" maxW="500px">
                    <Image
                        src={speaker}
                        alt="Speaker"
                        borderRadius="md"
                        objectFit="cover"
                        zIndex="2"
                        position="relative"
                    />
                    <Box
                        position="absolute"
                        bottom="-20px"
                        right="-20px"
                        width="60px"
                        height="60px"
                        bg="blue.900"
                        zIndex="1"
                        borderRadius="sm"
                    />
                </Box>

                {/* Right Content */}
                <Box flex="1">
                    <Text fontSize="sm" mb={1} color="gray.600">About Us</Text>
                    <Heading fontSize="40px" color="blue.900" mb={4}>
                        Welcome To Our Institute
                    </Heading>
                    <Text fontSize="md" color="gray.700" mb={6}>
                        In the dense overseas education industry, Achievers Academy stands tall with a formidable reputation, crafted over 24 years of immaculate counseling experience. An honest approach towards test prep, university shortlisting, and holistic application guidance, Achievers Academy continues in its journey of helping students realize their full potential and landing them opportunities that they truly deserve. So, your quest for a truly invested partner to guide you towards your overseas education dreams ends here.
                    </Text>
                    <Text fontSize="md" color="gray.700" mb={6}>
                        Thoroughly individual approach, personal accountability, and consistent mentorship have earned us tremendous credibility in the industry. Join us and experience reliable support every step of the way.
                    </Text>

                    <Button color="white" borderRadius="24" bg="#134BE4" mb={8} p={4} textTransform="uppercase">
                        Book Appointment Now
                    </Button>

                    {/* Info Stats */}
                    {/* Info Stats */}
                    {/* Info Stats */}
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={10}>
                        <Box
                            bg="#F4F6FB"
                            p={6}
                            borderRadius="lg"
                            textAlign="center"
                        >
                            <Heading fontSize="32px" fontWeight="bold" color="#1D3D8D" mb={1}>
                                25+
                            </Heading>
                            <Text fontSize="14px" color="#6C757D">
                                Years of Experience
                            </Text>
                        </Box>

                        <Box
                            bg="#F4F6FB"
                            p={6}
                            borderRadius="lg"
                            textAlign="center"
                        >
                            <Heading fontSize="32px" fontWeight="bold" color="#1D3D8D" mb={1}>
                                2L+
                            </Heading>
                            <Text fontSize="14px" color="#6C757D">
                                Happy Clients
                            </Text>
                        </Box>

                        <Box
                            bg="#F4F6FB"
                            p={6}
                            borderRadius="lg"
                            textAlign="center"
                        >
                            <Heading fontSize="32px" fontWeight="bold" color="#1D3D8D" mb={1}>
                                300+
                            </Heading>
                            <Text fontSize="14px" color="#6C757D">
                                University Admits
                            </Text>
                        </Box>
                    </SimpleGrid>


                </Box>
            </Flex>

            <Footer />
        </Box>
    );
}

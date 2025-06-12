import { Box, Heading, Text, Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import speaker from "../../theme/speaker.png"; // adjust path as needed
import topBg from "../../theme/aboutusbg.png"; // your blue background image

export default function AboutUs() {
    return (
        <Box>
            <Navbar />
            <br />
            {/* Hero Section with Background Image */}
            <Box
                bgImage={`url(${topBg})`}
                bgSize="cover"
                bgPosition="center"
                color="white"
                py={20}
                textAlign="center"
            >
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">ABOUT US</Heading>
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
                <Box
                    position="relative"
                    flex="1"
                    maxW="600px"
                    display={{ base: "none", md: "block" }} // 👈 Hides on mobile
                >
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
                <Box flex="1" mb={-10}>
                    {/* <Text fontSize="sm" mb={1} color="gray.600">About Us</Text> */}
                    <Heading fontSize="40px" color="blue.900" mb={4}>
                        Welcome To Our Institute
                    </Heading>
                    <Text fontSize="md" color="gray.700" mb={6} textAlign="justify">
                        In the dense overseas education industry, Achievers Academy stands tall with a formidable reputation, crafted over 24 years of immaculate counseling experience. An honest approach towards test prep, university shortlisting, and holistic application guidance, Achievers Academy continues in its journey of helping students realize their full potential and landing them opportunities that they truly deserve. So, your quest for a truly invested partner to guide you towards your overseas education dreams ends here.
                    </Text>
                    <Text fontSize="md" color="gray.700" mb={6} textAlign="justify">
                        Thoroughly individual approach, personal accountability, and consistent mentorship have earned us tremendous credibility in the industry. Join us and experience reliable support every step of the way.
                    </Text>

                    {/* <Button color="white" borderRadius="24" bg="#134BE4" mb={8} p={4} textTransform="uppercase">
                        Book Appointment Now
                    </Button> */}

                    {/* Info Stats */}
                    {/* Info Stats */}
                    {/* Info Stats */}
                    <Box bg="#edf1fc" py={5} px={{ base: 4, md: 20 }} borderRadius="md">
                        <Flex
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={{ base: 6, md: 0 }}
                            textAlign="center"
                        >
                            {/* Years of Experience */}
                            <Box>
                                <Text fontSize={{ base: "22px", sm: "22px", md: "40px" }} fontWeight="bold" color="#024877">
                                    25+
                                </Text>
                                <Text fontSize={{ base: "10px", sm: "22px", md: "16px" }} color="#024877">Years of Experience</Text>
                            </Box>

                            {/* University Admits */}
                            <Box>
                                <Text fontSize={{ base: "22px", sm: "22px", md: "40px" }} fontWeight="bold" color="#024877">
                                    15K+
                                </Text>
                                <Text fontSize={{ base: "10px", sm: "22px", md: "16px" }} color="#024877">University Admits</Text>
                            </Box>

                            {/* Scholarship Rate */}
                            <Box>
                                <Text fontSize={{ base: "22px", sm: "22px", md: "40px" }} fontWeight="bold" color="#024877">
                                    60%
                                </Text>
                                <Text fontSize={{ base: "10px", sm: "22px", md: "16px" }} color="#024877">Scholarship Rate</Text>
                            </Box>
                        </Flex>
                    </Box>


                </Box>
            </Flex>

            <Footer />
        </Box>
    );
}

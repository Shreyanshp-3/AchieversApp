import { Box, Heading, Text, Button, Image,   SimpleGrid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Homepage/Navbar";
import Footer from "../../Homepage/Footer";
import topBg from "../../../theme/aboutusbg.png"; // your blue background image
import c1 from "../../../img/testprep/GRE.png";
import c2 from "../../../img/testprep/SAT.png";
import c3 from "../../../img/testprep/TOEFL.png";


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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">TEST PREPERATION</Heading>
            </Box>


            <Box px={{ base: 4, md: 20 }} py={{ base: 8, md: 12 }} bg="white">
                <Heading
                    fontSize={{ base: "24px", md: "40px" }}
                    color="#214C7D"
                    mb={2}
                    textAlign={{ base: "center", md: "left" }}
                >
                    Test Preparations We Offer
                </Heading>

                <Text
                    mb={4}
                    color="gray.600"
                    fontSize={{ base: "12px", md: "18px" }}
                    textAlign={{ base: "center", md: "left" }}
                >
                    Explore our wide range of materials for test preparation
                </Text>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 5 }}>
                    {/* GRE */}
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="md"
                        p={5}
                        pt={6}
                    >
                        <Image
                            src={c1}
                            alt="GRE"
                            maxW="100%"
                            h="196px"
                            objectFit="contain"
                            mb={4}
                        />
                        <Text color="#214C7D" fontWeight="bold" fontSize="18px" mb={2}>
                            GRE
                        </Text>
                        <Text fontSize="14px" color="gray.600" mb={4}>
                            It is a standardized test required for applications to most STEM programs abroad. It tests a candidate’s verbal and quantitative abilities.
                        </Text>
                        <Button
                            bg="#134BE4"
                            color="white"
                            w="100%"
                            _hover={{
                                bg: "#102fc6",
                                transform: "scale(1.03)",
                                boxShadow: "lg",
                            }}
                            transition="all 0.3s ease"
                        >
                            <NavLink to="/testprep/Gre" >VIEW DETAILS</NavLink>
                        </Button>

                    </Box>

                    {/* TOEFL/IELTS */}
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="md"
                        p={5}
                        pt={6}
                    >
                        <Image
                            src={c3}
                            alt="TOEFL/IELTS"
                            maxW="100%"
                            h="196px"
                            objectFit="contain"
                            mb={4}
                        />
                        <Text color="#214C7D" fontWeight="bold" fontSize="18px" mb={2}>
                            TOEFL/IELTS
                        </Text>
                        <Text fontSize="14px" color="gray.600" mb={4}>
                            It is a language proficiency test that checks a candidate’s English language abilities on four sections namely reading, writing, speaking, and listening.
                        </Text>
                        <Button
                            bg="#134BE4"
                            color="white"
                            w="100%"
                            _hover={{
                                bg: "#102fc6",
                                transform: "scale(1.03)",
                                boxShadow: "lg",
                            }}
                            transition="all 0.3s ease"
                        >
                            <NavLink to="/testprep/Tofel" >VIEW DETAILS</NavLink>
                        </Button>

                    </Box>

                    {/* SAT */}
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="md"
                        p={5}
                        pt={6}
                    >
                        <Image
                            src={c2}
                            alt="SAT"
                            maxW="100%"
                            h="196px"
                            objectFit="contain"
                            mb={4}
                        />
                        <Text color="#214C7D" fontWeight="bold" fontSize="18px" mb={2}>
                            SAT
                        </Text>
                        <Text fontSize="14px" color="gray.600" mb={4}>
                            It is a standardized test for undergraduate applications to most STEM programs abroad. It tests a candidate’s verbal and quantitative abilities.
                        </Text>
                        <Button
                            bg="#134BE4"
                            color="white"
                            w="100%"
                            _hover={{
                                bg: "#102fc6",
                                transform: "scale(1.03)",
                                boxShadow: "lg",
                            }}
                            transition="all 0.3s ease"
                        >
                            <NavLink to="/testprep/Sat" >VIEW DETAILS</NavLink>
                        </Button>

                    </Box>
                </SimpleGrid>
            </Box>





            <Footer />
        </Box>
    );
}

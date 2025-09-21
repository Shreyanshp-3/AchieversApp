import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import speaker from "../../img/newabout.png";
import topBg from "../../theme/aboutusbg.png";
import mobiletopbg from "../../img/mobileheadbg.png";
import ashviniImage from "../../img/trainer/websiteimage.jpg";
import vipulImage from "../../img/trainer/websiteimage2.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function AboutUs() {
    return (
        <Box>
            <Navbar />
            <br />

            {/* Hero Section */}
            <Box
                bgImage={{
                    base: `url(${mobiletopbg})`,
                    md: `url(${topBg})`,
                }}
                bgSize="cover"
                bgPosition="center"
                color="white"
                py={20}
                textAlign="center"
            >
                <Heading fontSize={{ base: "24px", md: "76px" }} fontWeight="bold">
                    ABOUT US
                </Heading>
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
                {/* Left Image */}
                <Box
                    position="relative"
                    flex="1"
                    maxW="600px"
                    display={{ base: "none", md: "block" }}
                >
                    <Image
                        src={speaker}
                        alt="Speaker"
                        borderRadius="md"
                        objectFit="cover"
                        zIndex="2"
                        position="relative"
                    />
                </Box>

                {/* Right Content */}
                <Box flex="1" mb={-10}>
                    <Heading fontSize="40px" color="blue.900" mb={4}>
                        Welcome To Our Institute
                    </Heading>
                    <Text fontSize="md" color="gray.700" mb={6} textAlign="justify">
                        In the dense overseas education industry, Achievers Academy stands tall with a formidable reputation, crafted over 25 years of immaculate counseling experience. An honest approach towards test prep, university shortlisting, and holistic application guidance, Achievers Academy continues in its journey of helping students realize their full potential and landing them opportunities that they truly deserve. So, your quest for a truly invested partner to guide you towards your overseas education dreams ends here.                    </Text>
                    <Text fontSize="md" color="gray.700" mb={6} textAlign="justify">
                        Thoroughly individual approach, personal accountability, and consistent mentorship have earned us tremendous credibility in the industry. Join us and experience reliable support every step of the way.                    </Text>

                    {/* Stats */}
                    <Box bg="#edf1fc" py={5} px={{ base: 4, md: 20 }} borderRadius="md">
                        <Flex
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={{ base: 6, md: 0 }}
                            textAlign="center"
                        >
                            <Box>
                                <Text fontSize={{ base: "22px", md: "40px" }} fontWeight="bold" color="#024877">
                                    25+
                                </Text>
                                <Text fontSize={{ base: "10px", md: "16px" }} color="#024877">Years of Experience</Text>
                            </Box>

                            <Box>
                                <Text fontSize={{ base: "22px", md: "40px" }} fontWeight="bold" color="#024877">
                                    15K+
                                </Text>
                                <Text fontSize={{ base: "10px", md: "16px" }} color="#024877">University Admits</Text>
                            </Box>

                            <Box>
                                <Text fontSize={{ base: "22px", md: "40px" }} fontWeight="bold" color="#024877">
                                    60%
                                </Text>
                                <Text fontSize={{ base: "10px", md: "16px" }} color="#024877">Scholarship Rate</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>

            {/* Our Trainers Section */}
            <Box px={{ base: 4, md: 16 }} pb={20} textAlign="center">
                <Heading fontSize="32px" color="blue.900" mb={8}>
                    Our Team
                </Heading>
                <Flex justify="center" gap={0} wrap="wrap">
                    {/* Trainer 1 */}
                    <Box maxW="300px" mx="auto" mb={8} textAlign="center" position="relative">
                        <Box position="relative" w="180px" h="180px" mx="auto" mb={4}>
                            <Image
                                src={ashviniImage}
                                alt="Ashvini Danigond"
                                borderRadius="full"
                                boxSize="180px"
                                objectFit="cover"
                                border="8px solid white"
                                zIndex={1}
                                position="relative"
                            />
                            {/* SVG arcs */}
                            <svg
                                width="180"
                                height="180"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    pointerEvents: "none",
                                }}
                            >
                                {/* Maroon arc */}
                                <path
                                    d="M30,150 A90,90 0 0,1 150,30"
                                    fill="none"
                                    stroke="#024877"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                {/* Gold arc */}
                                <path
                                    d="M150,30 A90,90 0 0,1 170,90"
                                    fill="none"
                                    stroke="#C9A13B"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                {/* Maroon arc (bottom left) */}
                                <path
                                    d="M30,150 A90,90 0 0,1 90,170"
                                    fill="none"
                                    stroke="#024877"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </Box>
                        <Text mt={2} fontWeight="bold" fontSize="lg" color="gray.800" letterSpacing="1px">
                            Pallavi Desai                        </Text>
                        <Text fontSize="md" color="gray.500" fontWeight="semibold" mb={2} letterSpacing="1px">
                            FOUNDER & CENTER HEAD
                        </Text>
                        <Box borderTop="2px solid #024877" w="60px" mx="auto" mb={2}></Box>
                        <center>

                            <Link href="https://www.linkedin.com/in/pallavi--desai/" isExternal color="#024877" fontSize="2xl">
                                <FaLinkedin />
                            </Link>
                        </center>
                    </Box>
                    {/* Trainer 2 */}
                    <Box maxW="300px" mx="auto" mb={8} textAlign="center" position="relative">
                        <Box position="relative" w="180px" h="180px" mx="auto" mb={4}>
                            <Image
                                src={vipulImage}
                                alt="Vipul Danigond"
                                borderRadius="full"
                                boxSize="180px"
                                objectFit="cover"
                                border="8px solid white"
                                zIndex={1}
                                position="relative"
                            />
                            {/* SVG arcs */}
                            <svg
                                width="180"
                                height="180"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    pointerEvents: "none",
                                }}
                            >
                                {/* Maroon arc */}
                                <path
                                    d="M30,150 A90,90 0 0,1 150,30"
                                    fill="none"
                                    stroke="#8B1F3B"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                {/* Gold arc */}
                                <path
                                    d="M150,30 A90,90 0 0,1 170,90"
                                    fill="none"
                                    stroke="#C9A13B"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                {/* Maroon arc (bottom left) */}
                                <path
                                    d="M30,150 A90,90 0 0,1 90,170"
                                    fill="none"
                                    stroke="#024877"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </Box>
                        <Text mt={2} fontWeight="bold" fontSize="lg" color="gray.800" letterSpacing="1px">
                            Ananya Desai                        </Text>
                        <Text fontSize="md" color="gray.500" fontWeight="semibold" mb={2} letterSpacing="1px">
                            BUSINESS STRATEGY AND OPERATIONS MANAGER
                        </Text>
                        <Box borderTop="2px solid #024877" w="60px" mx="auto" mb={2}></Box>
                        <center>

                            <Link href="https://www.linkedin.com/in/ananya-desai" isExternal color="#024877" fontSize="2xl">
                                <FaLinkedin />
                            </Link>
                        </center>
                    </Box>
                </Flex>
            </Box>

            <Footer />
        </Box>
    );
}
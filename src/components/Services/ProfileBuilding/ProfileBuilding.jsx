import { Box, Heading, Text, Button, Flex, Image, ListItem, List, Link } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../Homepage/Navbar";
import Footer from "../../Homepage/Footer";
// import topBg from "../../../../theme/aboutusbg.png"; // your blue background image
import topBg from "../../../theme/aboutusbg.png"; // your blue background image
import c3 from "../../../img/services/pb.png";
// import c3 from "../../../../img/testprep/TOEFL.png";



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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">PROFILE BUILDING</Heading>
            </Box>

            <Box px={{ base: 4, md: 20 }} py={10} bg="white">
                <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
                    {/* Left: GRE Info */}
                    <Box flex="2">
                        <Heading fontSize="28px" color="#214C7D" mb={4}>
                            Elevate Your Profile
                        </Heading>
                        {/* <Text fontWeight="bold" fontSize="18px" mb={2} color="gray.700">
                            The test evaluates a student's proficiency in English across four core sections:
                        </Text> */}
                        <Box mb={8}>
                            <List spacing={4} fontSize="15px" color="gray.700">
                                <ListItem>
                                    <Text>
                                        Profile Building is a one of its kind service provided by us over the past 25 years that has earned us tremendous leverage in the counseling industry. This activity literally takes a student under its wings, right from the selection of a suitable specialization domain, up to the complete development of a holistic technical and non-technical profile.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        One-on-one counseling sessions are conducted over a period of eight to nine months, simultaneously alongside the course prep duration. These sessions include selection of online courses, mini and mega projects, development of research papers, guidance for internship activities, case studies, etc. We offer several in-house training workshops, guest lectures, multidisciplinary project platforms, and internship recommendations to assist throughout the profile building journey.                                    </Text>
                                </ListItem>
                                {/* </br> */}
                                <ListItem>
                                    <Text>
                                        Every student is guided towards curating a highly impressive profile to be showcased to high-ranking universities in their intended area of specialization.
                                    </Text>
                                </ListItem>


                            </List>
                        </Box>


                    </Box>

                    {/* Right: GRE Card */}
                    <Box
                        flex="1"
                        bg="white"
                        boxShadow="md"
                        borderRadius="lg"
                        p={5}
                        height={"100%"}
                        border="1px solid #E2E8F0"
                    >
                        <Image
                            src={c3} // use your existing image source here
                            alt="GRE"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            mb={4}
                            borderRadius="md"
                        />

                        <Text fontWeight="bold" color="#214C7D" fontSize="18px" mb={3}>
                            Profile Building
                        </Text>
                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Trainer:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold" textAlign="right">
                                Pallavi Desai
                            </Text>
                        </Flex>

                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Timeline:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">5 Months</Text>
                        </Flex>

                        <Flex justify="space-between" mb={5}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Mode:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">In-Person/Online</Text>
                        </Flex>

                        <Link
                            href="https://calendar.app.google/Pr9G4acTykNThqNS7"
                            isExternal
                            w="100%"
                            _hover={{ textDecoration: "none" }}
                        >
                            <Button
                                w="100%"
                                bg="#134BE4"
                                color="white"
                                _hover={{
                                    bg: "#0f3fc1",
                                    transform: "scale(1.03)",
                                    boxShadow: "lg",
                                }}
                            >
                                BOOK AN APPOINTMENT
                            </Button>
                        </Link>
                    </Box>
                </Flex>

            </Box >






            <Footer />
        </Box >
    );
}

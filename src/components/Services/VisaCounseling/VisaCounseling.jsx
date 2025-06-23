import { Box, Heading, Text, Button, Flex, Image, List, ListItem } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../Homepage/Navbar";
import Footer from "../../Homepage/Footer";
// import topBg from "../../../../theme/aboutusbg.png"; // your blue background image
import topBg from "../../../theme/aboutusbg.png"; // your blue background image
import c3 from "../../../img/services/vc.png";
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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">VISA COUNSELING</Heading>
            </Box>

            <Box px={{ base: 4, md: 20 }} py={10} bg="white">
                <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
                    {/* Left: GRE Info */}
                    <Box flex="2">
                        <Heading fontSize="28px" color="#214C7D" mb={4}>
                            Stamped And Sorted
                        </Heading>
                        {/* <Text fontWeight="bold" fontSize="18px" mb={2} color="gray.700">
                            The test evaluates a student's proficiency in English across four core sections:
                        </Text> */}
                        <Box  mb={8}>
                            <List spacing={4} fontSize="15px" color="gray.700">
                                <ListItem>
                                    <Text>
                                        Although standard guidelines have been set out on various websites for the visa application process, the process is nevertheless quite intuitive and needs to be handled with utmost reverence for the general guidelines and case-based details. At Achievers Academy, we pay healthy attention to the applicant’s overall background, including the quality of admitted university, selected domain of specialization, its scope and future applications, sponsor’s financial background, and academic details. Instead of assuming the remedial approach, we embrace the preventive approach and make sure these factors are well in-place right from the onset. Equally careful attention to the quality and authenticity of documentation, immaculate filing of documents and forms, timely booking of visa appointment dates are other factors that we do not take for granted. Three rounds of mock interviews with expert insights and proven techniques have earned us the covetous legacy of 25 years of 100% visa approvals. That is a mean feat indeed.
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
                            Visa Counseling
                        </Text>
                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Trainer:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold" textAlign="right">
                                Pallavi Desai
                            </Text>
                        </Flex>

                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Timeline:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">1 Month</Text>
                        </Flex>

                        <Flex justify="space-between" mb={5}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Mode:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">In-Person/Online</Text>
                        </Flex>

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
                    </Box>
                </Flex>
                {/* <Box mt={4}>
                    <Heading fontSize="28px" color="#214C7D" mb={4}>
                        Our Approach
                    </Heading>
                    <Text fontSize="15px" color="gray.700" lineHeight="1.8">
                        At Achievers Academy every section is presented to the students through its objectives, expectations and strategies to be deployed to tackle the section successfully. Theoretical tips and techniques combined with demo tasks, especially for the writing and speaking sections make the lectures immersive. Students are encouraged to deliver their prompts during live lectures that allow the trainer to provide real-time feedback. Substantial practice examples, productive back and forth and timely suggestions culminate into a refined performance towards the end of a month and a half of the course duration.
                    </Text>
                </Box> */}
            </Box >






            <Footer />
        </Box >
    );
}

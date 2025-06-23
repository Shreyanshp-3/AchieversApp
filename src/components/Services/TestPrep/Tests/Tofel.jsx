import { Box, Heading, Text, Button, Flex, Image, OrderedList, ListItem } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../../Homepage/Navbar";
import Footer from "../../../Homepage/Footer";
import topBg from "../../../../theme/aboutusbg.png"; // your blue background image
// import c3 from "../../../../img/testprep/TOFEL.png";
import c3 from "../../../../img/testprep/TOEFL.png";

import mobiletopbg from "../../../../img/mobileheadbg.png"; // your blue background image


export default function AboutUs() {
    return (
        <Box>
            <Navbar />
            <br />
            {/* Hero Section with Background Image */}
            <Box
                 bgImage={{
                    base: `url(${mobiletopbg})`, // 👈 mobile image
                    md: `url(${topBg})`,      // 👈 desktop image
                }}
                bgSize="cover"
                bgPosition="center"
                color="white"
                py={20}
                textAlign="center"
            >
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">TOFEL/IELTS EXAM DETAILS</Heading>
            </Box>

            <Box px={{ base: 4, md: 20 }} py={10} bg="white">
                <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
                    {/* Left: GRE Info */}
                    <Box flex="2">
                        <Heading fontSize="28px" color="#214C7D" mb={4}>
                            TOEFL/IELTS: What’s Inside
                        </Heading>
                        <Text fontWeight="bold" fontSize="18px" mb={2} color="gray.700">
                            The test evaluates a student's proficiency in English across four core sections:                        </Text>
                        <Box pl={4} mb={8}>
                            <OrderedList spacing={4} fontSize="15px" color="gray.700">
                                <ListItem>
                                    <Text>
                                        <strong>Reading:</strong> This section consists of mid-size academic passages, followed by questions that test a range of abilities. Students are assessed on their skill in drawing inferences, identifying the main idea of the passage, understanding built-in vocabulary, recognizing sentence-level errors, and general comprehension. The reading section measures a student’s ability to process and analyze academic texts, which is essential in English-instructed university programs.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>Listening:</strong> This section includes short conversations or lectures, each followed by related questions. Beyond language comprehension, students are evaluated on their recall ability and their capacity to independently process spoken details, attitudes, and implied meanings. The listening section emphasizes real-world academic listening skills necessary for classroom learning and interaction.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>Speaking:</strong> The speaking section comprises four subtasks. The independent speaking task requires students to choose between given options and quickly express a clear opinion. The three integrated tasks include reading a short article and/or listening to a related lecture, followed by a prompt that requires students to integrate information and deliver a well-organized spoken response. This section tests the student’s ability to comprehend academic material and articulate relevant points fluently under time constraints.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>Writing:</strong> The writing section has two parts. The academic writing task presents a professor’s prompt along with responses from other students. The candidate must write a structured response that addresses the professor’s question while engaging with viewpoints expressed by peers. The integrated writing task combines reading an article and listening to a lecture on a related topic. Students must then develop a written response that accurately reflects and connects ideas from both sources. This section evaluates critical thinking, clarity of expression, and coherence in academic writing.
                                    </Text>
                                </ListItem>
                            </OrderedList>
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
                            GRE Exam
                        </Text>
                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Trainer:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold" textAlign="right">
                                Pallavi Desai & Gitesh Andhari
                            </Text>
                        </Flex>

                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Timeline:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">1.5 Months</Text>
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
                <Box mt={4}>
                    <Heading fontSize="28px" color="#214C7D" mb={4}>
                        Our Approach
                    </Heading>
                    <Text fontSize="15px" color="gray.700" lineHeight="1.8">
                        At Achievers Academy every section is presented to the students through its objectives, expectations and strategies to be deployed to tackle the section successfully. Theoretical tips and techniques combined with demo tasks, especially for the writing and speaking sections make the lectures immersive. Students are encouraged to deliver their prompts during live lectures that allow the trainer to provide real-time feedback. Substantial practice examples, productive back and forth and timely suggestions culminate into a refined performance towards the end of a month and a half of the course duration.
                    </Text>
                </Box>
            </Box>






            <Footer />
        </Box>
    );
}

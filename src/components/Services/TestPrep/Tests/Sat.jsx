import { Box, Heading, Text, Button, Flex, Image, OrderedList, ListItem } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../../Homepage/Navbar";
import Footer from "../../../Homepage/Footer";
import topBg from "../../../../theme/aboutusbg.png"; // your blue background image
import c3 from "../../../../img/testprep/SAT.png";
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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">SAT EXAM DETAILS</Heading>
            </Box>

            <Box px={{ base: 4, md: 20 }} py={10} bg="white">
                <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
                    {/* Left: GRE Info */}
                    <Box flex="2">
                        <Heading fontSize="28px" color="#214C7D" mb={4}>
                            SAT: What’s Inside                        </Heading>
                        <Text fontWeight="bold" fontSize="18px" mb={2} color="gray.700">
                            The SAT evaluates a student’s readiness for undergraduate education across three core sections:                        </Text>
                        <Box pl={4} mb={8}>
                            <OrderedList spacing={4} fontSize="15px" color="gray.700">
                                <ListItem>
                                    <Text>
                                        <strong>Reading and Writing:</strong> This section features a range of academic and practical passages followed by questions that assess a student’s grasp of English language skills. The section tests comprehension through main idea identification, purpose or function of statements, inference-based reasoning, and vocabulary usage. Writing-related questions evaluate grammar, punctuation, and sentence structure. Additionally, some questions incorporate graphs and charts, requiring students to analyze and draw conclusions by combining textual and visual data
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>Quantitative aptitude:</strong> This section covers essential mathematical topics such as arithmetic, algebra, geometry, and trigonometry. Although these concepts are rooted in the high school curriculum, the SAT challenges students to apply them in nuanced problem-solving contexts. The section assesses logical reasoning, fluency with formulas, and time-efficient calculation, using varied formats that test both conceptual understanding and analytical ability.
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
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">6 Months</Text>
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
                        At Achievers Academy, we adopt a structured and student-centered approach to SAT preparation. For the verbal section, we introduce candidates to every question variety with its accompanying tricks and techniques. Each type of question is then reinforced through extensive practice drills designed to deepen understanding and build confidence. Once students are comfortable with individual question formats, they move on to integrated practice sets that simulate real test conditions and train them to manage time and complexity.
                        For the quantitative section, although the content aligns with a student’s high school syllabus, we reintroduce every topic at the fundamental level to ensure conceptual clarity. Students are then exposed to a wide array of question banks that help sharpen their quantitative aptitude across problem types. This targeted preparation is followed by sectional and full-length timed mock test series. Each student completes at least 8 full-length tests to build stamina, pacing, and familiarity with the testing environment, ensuring they are fully equipped for test day.
                    </Text>
                </Box>
            </Box>






            <Footer />
        </Box>
    );
}

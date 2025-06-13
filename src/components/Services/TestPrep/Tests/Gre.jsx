import { Box, Heading, Text, Button, Flex, Image,  OrderedList, ListItem } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../../Homepage/Navbar";
import Footer from "../../../Homepage/Footer";
import topBg from "../../../../theme/aboutusbg.png"; // your blue background image
import c3 from "../../../../img/testprep/GRE.png";



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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">GRE EXAM DETAILS</Heading>
            </Box>

            <Box px={{ base: 4, md: 20 }} py={10} bg="white">
                <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
                    {/* Left: GRE Info */}
                    <Box flex="2">
                        <Heading fontSize="28px" color="#214C7D" mb={4}>
                            GRE: What’s Inside
                        </Heading>
                        <Text fontWeight="bold" fontSize="18px" mb={2} color="gray.700">
                            The test examines students on three broad sections:
                        </Text>
                        <Box pl={4} mb={8}>
                            <OrderedList spacing={4} fontSize="15px" color="gray.700">
                                <ListItem>
                                    <Text>
                                        <strong>Verbal ability:</strong> It consists of two main topics, namely reading comprehension and text completion. Within reading comprehension, a student is tested on two types of passages, regular reading passages and critical reasoning. The text completion section has two types of fill in the blanks, namely text completion, and sentence equivalence. The verbal ability section evaluates a student on English comprehension and vocabulary usage, two language tools that have immense utilitarian value throughout a student’s academic and professional journey.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>Quantitative aptitude:</strong> The math section of the GRE test spans fundamentals of algebra, arithmetic, geometry, basic trigonometry, and data interpretation. Questions are framed in three formats: Quantitative comparison, a GRE specific format, requires quick data assessment and approximation techniques. Problem-solving, more traditional question variety, requires a student to identify a correct approach and find the solution by applying appropriate formulae. Data interpretation requires data represented in the form of graphs, charts, tables, etc. to be extracted and processed to answer questions based on the datasets. The quantitive section of the GRE thus evaluates the candidate on robust mathematic fundaments that they are expected to apply during study programs under the STEM umbrella in particular.
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>The AWA section:</strong> The analytical writing section comprises of an essay called the issue analysis, with logical topics that urge a student to take a stand, either in complete favor or opposition. This essay category is highly thought-provoking, and tests a students on multiple levels, such as originality of ideas, clarity of opinion, and sharp organization of content. While language takes a backseat in this essay category, reasoning and analytical skills are the hero factor.
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
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">6 months</Text>
                        </Flex>

                        <Flex justify="space-between" mb={5}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Mode:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">In-person/Online</Text>
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
                        At Achievers Academy we impart effective strategies, time-tested tips and expert inputs, all accrued over an extensive pedagogy span of 25 years. Every topic is languidly introduced through theoretical lectures without rushing into exercises directly. A set of background lectures therefore lays a tenacious foundation and a strong prep background that launches a student confidently into follow-up exercises. A huge number and variety of samples ensures an enviable exposure that helps the students navigate every topic with tremendous confidence. An excellent three step approach for quick comprehension of passages, a laser-sharp focus on keywords, connectors and fill in the blanks, and a variety of well-curated reasons to support ones stand in the AWA section are just glimpses of the expertise provided for success in the verbal section. For quantitative too, none of the topics are taken for granted. Every topic is introduced at the core level that involves brushing up of fundamentals and a good spread of examples to anchor in. Thus, the training program is one of its kind, with strong emphasis on thorough introduction of every topic involved coupled with guided application through extensive practice exercises.
                    </Text>
                </Box>
            </Box>






            <Footer />
        </Box>
    );
}

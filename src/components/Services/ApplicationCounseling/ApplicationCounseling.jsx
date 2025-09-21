import { Box, Heading, Text, Button, Flex, Image, List, ListItem,Link } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../Homepage/Navbar";
import Footer from "../../Homepage/Footer";
// import topBg from "../../../../theme/aboutusbg.png"; // your blue background image
import topBg from "../../../theme/aboutusbg.png"; // your blue background image
import c3 from "../../../img/services/as.png";
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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">APPLICATION COUNSELING</Heading>
            </Box>

            <Box px={{ base: 4, md: 20 }} py={10} bg="white">
                <Flex direction={{ base: "column-reverse", md: "row" }} gap={10}>
                    {/* Left: GRE Info */}
                    <Box flex="2">
                        <Heading fontSize="28px" color="#214C7D" mb={4}>
                            Turning Ambition Into Acceptance
                        </Heading>
                        {/* <Text fontWeight="bold" fontSize="18px" mb={2} color="gray.700">
                            The test evaluates a student's proficiency in English across four core sections:
                        </Text> */}
                        <Box mb={8}>
                            <List spacing={4} fontSize="15px" color="gray.700">
                                <ListItem>
                                    <Text>
                                        While a good GRE score, satisfactory GPA, and an impressive profile are the three pillars upon which the admission outcome rests, it is the quality of documents that finally capture these factors and pitch it to the university on the candidate’s behalf. This self-marketing has to be immaculate, yet organic and personalised. Letters of recommendation, transcripts, statement of purpose, resume and other documents are part of the composite report card that the candidate has to present to the university for evaluation. Along with quality documents, the final shortlisting of universities is of unmatched importance. The university choice should reflect the candidate’s area of interest and background profile. Both these aspects go hand-in-hand to deliver a successful counseling experience.                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        With a pulse on the latest trends with regards to academic subjects, industry demand, and an enviable alumni network, we are equipped with the knowledge and expertise to help students navigate the application process. Very personalized guidance is extended right from subject selection, curating a strong technical profile, and crafting individualized documentation. The extensive amount of time every student spends with us for the test prep and profile building process gives us the opportunity to dwell upon their achievements and strengths, and capture them perfectly in the application material. Personalized dictation of recommendation letters, multiple sittings for the SOP draft, and an expert insight into university selection is what makes our counseling process extremely unique. A highly tailor-made approach that involves 20-25 one-on-one appointments directly with Mrs. Pallavi Desai throughout the application process leaves the student completely satisfied with the experience. Formatted documents, impersonal delegated counselling, and safe choice of universities have no place in our recommendation system. In fact, we encourage students to step out of their comfort zone, and be audacious enough to test ambitious choices after toiling on their test prep and profile building activities.
                                    </Text>
                                </ListItem>
                                {/* </br> */}
                                <ListItem>
                                    <Text>
                                        <strong>Timeline:</strong> 2 months, 25 one-on-one sessions, 3 sessions/week
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text>
                                        <strong>Services: </strong>
                                    </Text>
                                    <Text>
                                        - Statement of Purpose (SoP)
                                    </Text>
                                    <Text>
                                        - Personal essays
                                    </Text>
                                    <Text>
                                        - Letters of Recommendation (LoRs)
                                    </Text>
                                    <Text>
                                        - Resume
                                    </Text>
                                    <Text>
                                        - Standard documentation and formatting for transcripts, financial documents, etc.
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
                            Application Counseling
                        </Text>
                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Trainer:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold" textAlign="right">
                                Pallavi Desai
                            </Text>
                        </Flex>

                        <Flex justify="space-between" mb={3}>
                            <Text fontSize="14px" color="gray.600" fontWeight="semibold">Timeline:</Text>
                            <Text fontSize="14px" color="#214C7D" fontWeight="bold">2 Months</Text>
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
                {/* <Box mt={4}>
                    <Heading fontSize="28px" color="#214C7D" mb={4}>
                        Our Approach
                    </Heading>
                    <Text fontSize="15px" color="gray.700" lineHeight="1.8">
                        At Global Achievers every section is presented to the students through its objectives, expectations and strategies to be deployed to tackle the section successfully. Theoretical tips and techniques combined with demo tasks, especially for the writing and speaking sections make the lectures immersive. Students are encouraged to deliver their prompts during live lectures that allow the trainer to provide real-time feedback. Substantial practice examples, productive back and forth and timely suggestions culminate into a refined performance towards the end of a month and a half of the course duration.
                    </Text>
                </Box> */}
            </Box >






            <Footer />
        </Box >
    );
}

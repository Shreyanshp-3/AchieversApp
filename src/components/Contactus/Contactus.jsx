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
                <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">Contact US</Heading>
            </Box>

           

            <Footer />
        </Box>
    );
}

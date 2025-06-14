import { Box, Heading, Text, Button, Flex, Image, Link, Icon } from "@chakra-ui/react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
// import speaker from "../../theme/speaker.png"; // adjust path as needed
import topBg from "../../theme/aboutusbg.png"; // your blue background image
import appointmentBg from "../../theme/ILLUSTRATION.png";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

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

      <Box px={{ base: 4, md: 24 }} py={12} bg="white">
        <Heading mb={6} color="#024877" fontSize="28px">
          Contact Details
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="start"
          gap={{ base: 10, md: 20 }}
        >
          {/* Left: Contact Info */}
          <Box flex="1" maxW="500px">
            {/* Address */}
            <Flex align="flex-start" mb={6}>
              <Icon as={MdLocationOn} boxSize={5} color="#024877" mt={1} />
              <Box ml={3}>
                <Text fontWeight="bold" color="#024877" fontSize="15px">
                  Address:
                </Text>
                <Text fontSize="15px">671, 2nd lane Shahupuri, Kolhapur - 416001</Text>
              </Box>
            </Flex>

            {/* Phone */}
            <Flex align="flex-start" mb={6}>
              <Icon as={MdPhone} boxSize={5} color="#024877" mt={1} />
              <Box ml={3}>
                <Text fontWeight="bold" color="#024877" fontSize="15px">
                  Phone:
                </Text>
                <Text fontSize="15px">+91 98232 84272</Text>
              </Box>
            </Flex>

            {/* Email */}
            <Flex align="flex-start" mb={6}>
              <Icon as={MdEmail} boxSize={5} color="#024877" mt={1} />
              <Box ml={3}>
                <Text fontWeight="bold" color="#024877" fontSize="15px">
                  E-mail:
                </Text>
                <Text fontSize="15px">achieversacademyglobal@gmail.com</Text>
              </Box>
            </Flex>

            {/* LinkedIn */}
            <Flex align="flex-start">
              <Icon as={FaLinkedin} boxSize={5} color="#024877" mt={1} />
              <Box ml={3}>
                <Link
                  href="https://www.linkedin.com/in/pallavi--desai/"
                  isExternal
                  color="#024877"
                  fontWeight="bold"
                  fontSize="15px"
                >
                  LinkedIn
                </Link>
                <Text fontSize="15px">www.linkedin.com/in/pallavi--desai/</Text>
              </Box>
            </Flex>
          </Box>

          {/* Right: Embedded Map */}
          {/* Right: Embedded Map */}
          <Box flex="1" w="100%" maxW={{ base: "100%", md: "581px" }}>
            <Box
              position="relative"
              pt="56.25%" // 16:9 aspect ratio
              w="100%"
              borderRadius="md"
              overflow="hidden"
            >
              <Box
                as="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.516537366299!2d74.23286667485564!3d16.701059422214417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1006c9fc00365%3A0xe95c8eeb7b8c0602!2sDesai%20Hospital!5e0!3m2!1sen!2sin!4v1749788797008!5m2!1sen!2sin"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                border="0"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                title="Desai Hospital Location Map"
              />
            </Box>
          </Box>

        </Flex>
      </Box>



      <Box
        bg="#f3f3f3"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 16 }}
        position="relative"
        overflow="hidden"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          position="relative"
          zIndex={1}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box
            maxW="600px"
            mb={6}
            zIndex={2}
          >
            <Heading
              fontSize={{ base: "22px", md: "40px" }}
              color="#003366"
              fontWeight="800"
              mb={4}
            >
              Book an Appointment
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "18px" }}
              color="#003366"
              mb={6}
              lineHeight="1.7"
            >
              Ready to take the next step towards your study abroad dreams?
              Book an appointment with our expert team today and get
              personalized guidance tailored to your goals.
            </Text>
            <Button
              bg="#1a46e4"
              color="white"
              size="md"
              fontWeight="semibold"
              borderRadius="lg"
              width={{ base: "100%", md: "auto" }}
              _hover={{ bg: "#1539bb", transform: "scale(1.03)" }}
              transition="all 0.3s ease"
            >
              BOOK AN APPOINTMENT
            </Button>
          </Box>
        </Flex>

        {/* Bottom-right image with spacing */}
        <Box
          position="absolute"
          right={{ base: "0", md: "20px" }}
          bottom="0"
          maxW={{ base: "100%", md: "600px" }}
          zIndex={0}
        >
          <Image
            src={appointmentBg}
            alt="Appointment Illustration"
            objectFit="cover"
            width="100%"
          />
        </Box>
      </Box>


      <Footer />
    </Box>
  );
}

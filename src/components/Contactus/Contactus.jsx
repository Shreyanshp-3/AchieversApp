import { Box, Heading, Text, Button, Flex, Image, Link, Icon } from "@chakra-ui/react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
// import speaker from "../../theme/speaker.png"; // adjust path as needed
import topBg from "../../theme/aboutusbg.png"; // your blue background image
import appointmentBg from "../../theme/ILLUSTRATION.png";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import mobiletopbg from "../../img/mobileheadbg.png"; // your blue background image

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
        <Heading fontSize={{ base: "24px", md: "76px", sm: "76px" }} fontWeight="bold">Contact US</Heading>
      </Box>

      <Box px={{ base: 4, md: 24 }} py={12} bg="white">


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
              {/* <Icon as={MdLocationOn} boxSize={5} color="#024877" mt={1} /> */}
              <Box ml={3}>
                <Heading color="#024877" fontSize="28px">
                  Contact Details
                </Heading>
              </Box>
            </Flex>
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
              pt="53%" // 16:9 aspect ratio
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
        border="1px solid #dbe4f0"
        px={{ base: 4, md: 16 }}
        py={{ base: 10, md: 20 }}
        position="relative"
        overflow="hidden"
        minH={{ base: "auto", md: "360px" }}
      >
        <Flex
          direction="column"
          justify="center"
          maxW="1200px"
          mx="auto"
          zIndex={2}
          position="relative"
        >
          <Box maxW={{ base: "100%", md: "560px" }} zIndex={2}>
            <Heading
              fontSize={{ base: "24px", md: "36px" }}
              color="#003366"
              fontWeight="bold"
              mb={4}
            >
              Book an Appointment
            </Heading>
            <Text
              fontSize={{ base: "12px", md: "18px" }}
              color="#003366"
              mr={20}
              mb={6}
              lineHeight="1.7"
            >
              Ready to take the next step towards your study abroad dreams? Book an
              appointment with our expert team today and get personalized guidance
              tailored to your goals.
            </Text>

            <Link
              href="https://calendar.app.google/Pr9G4acTykNThqNS7"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bg="#134BE4"
                color="white"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                fontWeight="bold"
                px={{ base: "20px", md: "28px" }}
                py={{ base: "12px", md: "16px" }}
                borderRadius="12px"
                _hover={{ bg: "#0f3fbe", transform: "scale(1.02)" }}
                transition="all 0.3s ease"
              >
                BOOK AN APPOINTMENT
              </Button>

            </Link>
          </Box>
        </Flex>

        {/* Background Illustration (partially shown) */}
        <Box
          position="absolute"
          bottom="0"
          right={{ base: "-220px", md: "0" }}  // Move right only on mobile
          top={{ base: "8", md: "auto" }}      // Offset top only on mobile
          w="100%"
          maxW={{ base: "500px", md: "600px" }} // Adjust max width
          h={{ base: "100%", md: "auto" }}
          overflow="hidden"
          zIndex={1}
        >
          <Image
            src={appointmentBg}
            alt="Appointment Illustration"
            objectFit="cover"
            objectPosition="bottom right"
            w="100%"
            h="100%"
            transform={{ base: "scale(0.8)", md: "scale(1)" }}  // Normal scale on desktop
            opacity={0.9}
          />
        </Box>

      </Box>






      <Footer />
    </Box>
  );
}

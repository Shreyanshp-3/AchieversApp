import {
    Box,
    Flex,
    Text,
    Link,
    VStack,
    Divider,
    useBreakpointValue,
    Heading,
  } from "@chakra-ui/react";
  
  export default function Footer() {
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Box bg="#032541" color="white" py={10}>
        <Box maxW="1200px" mx="auto" px={{ base: 6, md: 20 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="flex-start"
            gap={{ base: 10, md: 10 }}
          >
            {/* Left Section */}
            <Box maxW={{ base: "100%", md: "40%" }}>
              <Heading fontSize="lg" mb={3}>
                Achiever’s Academy
              </Heading>
              <Text fontSize="sm" lineHeight="tall" color="gray.300">
                Achievers Academy has built a strong reputation over 24 years in the overseas
                education industry, offering expert counseling, test prep, and application
                guidance. Our personalized approach helps students unlock their full potential
                and achieve success in their study abroad journey.
              </Text>
            </Box>
  
            {/* Vertical Line (Visible only on Desktop) */}
            {!isMobile && (
              <Box
                height="100%"
                minH="150px"
                borderLeft="1px solid white"
                mx={8}
              />
            )}
  
            {/* Right Section */}
            <Flex
              direction={{ base: "row", md: "row" }}
              gap={{ base: 10, md: 20 }}
              w="100%"
              justify={{ base: "space-between", md: "flex-start" }}
            >
              {/* Contents */}
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold">Contents</Text>
                <Link fontSize="sm" color="gray.300">About Us</Link>
                <Link fontSize="sm" color="gray.300">Services</Link>
                <Link fontSize="sm" color="gray.300">Testimonials</Link>
                <Link fontSize="sm" color="gray.300">Contact</Link>
                <Link fontSize="sm" color="gray.300">Book an Appointment</Link>
              </VStack>
  
              {/* Working Hours */}
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold">Working Hours</Text>
                <Text fontSize="sm" color="gray.300">
                  10:00 - 19:00 - Monday-Friday
                </Text>
                <Text fontSize="sm" color="gray.300">
                  10:00 - 14:00 - Saturday
                </Text>
                <Text fontSize="sm" color="gray.300">
                  Closed - Sunday
                </Text>
              </VStack>
            </Flex>
          </Flex>
  
          {/* Footer Bottom Line */}
          <Divider my={6} borderColor="gray.600" />
          <Text fontSize="xs" textAlign="center" color="gray.400">
            Copyright © 2025 All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }
  
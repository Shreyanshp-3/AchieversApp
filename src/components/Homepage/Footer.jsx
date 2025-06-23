// import {
//     Box,
//     Flex,
//     Text,
//     Link,
//     VStack,
//     Divider,
//     useBreakpointValue,
//     Heading,
//   } from "@chakra-ui/react";
  
//   export default function Footer() {
//     const isMobile = useBreakpointValue({ base: true, md: false });
  
//     return (
//       <Box bg="#032541" color="white" py={10}>
//         <Box maxW="1200px" mx="auto" px={{ base: 6, md: 20 }}>
//           <Flex
//             direction={{ base: "column", md: "row" }}
//             justify="space-between"
//             align="flex-start"
//             gap={{ base: 10, md: 10 }}
//           >
//             {/* Left Section */}
//             <Box maxW={{ base: "100%", md: "40%" }}>
//               <Heading fontSize="lg" mb={3}>
//                 Achiever’s Academy
//               </Heading>
//               <Text fontSize="sm" lineHeight="tall" color="gray.300" textAlign={{ base: "justify" }}>
//               Achievers Academy has built a strong reputation over 25 years in the overseas education industry, offering expert counseling, test prep, and application guidance. Our honest, personalized approach helps students reach their full potential and secure the opportunities they deserve. If you're seeking a dedicated partner for your study abroad journey, look no further. Join us and experience reliable support every step of the way.
//               </Text>
//             </Box>
  
//             {/* Vertical Line (Visible only on Desktop) */}
//             {!isMobile && (
//               <Box
//                 height="100%"
//                 minH="250px"
//                 borderLeft="1px solid white"
//                 mx={8}
//               />
//             )}
  
//             {/* Right Section */}
//             <Flex
//               direction={{ base: "row", md: "row" }}
//               gap={{ base: 10, md: 20 }}
//               w="100%"
//               justify={{ base: "space-between", md: "flex-start" }}
//             >
//               {/* Contents */}
//               <VStack align="flex-start" spacing={3}>
//                 <Text fontWeight="bold">Contents</Text>
//                 <Link fontSize="sm" color="gray.300">About Us</Link>
//                 <Link fontSize="sm" color="gray.300">Services</Link>
//                 <Link fontSize="sm" color="gray.300">Testimonials</Link>
//                 <Link fontSize="sm" color="gray.300">Contact</Link>
//                 <Link fontSize="sm" color="gray.300">Book an Appointment</Link>
//               </VStack>
  
//               {/* Working Hours */}
//               <VStack align="flex-start" spacing={3}>
//                 <Text fontWeight="bold">Working Hours</Text>
//                 <Text fontSize="sm" color="gray.300">
//                   10:00 - 19:00 - Monday-Friday
//                 </Text>
//                 <Text fontSize="sm" color="gray.300">
//                   10:00 - 14:00 - Saturday
//                 </Text>
//                 <Text fontSize="sm" color="gray.300">
//                   Closed - Sunday
//                 </Text>
//               </VStack>
//             </Flex>
//           </Flex>
  
//           {/* Footer Bottom Line */}
//           <Divider my={6} borderColor="gray.600" />
//           <Text fontSize="xs" textAlign="center" color="gray.400">
//             Copyright © 2025 All rights reserved
//           </Text>
//         </Box>
//       </Box>
//     );
//   }
import { Box, Flex, Text, VStack, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#002347" color="white" px={{ base: 6, md: 20 }} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        position="relative"
        gap={{ base: 10, md: 16 }}
      >
        {/* Left Section - About */}
        <Box flex="1" pr={{ md: 8 }}>
          <Text fontWeight="bold" fontSize="xl" mb={3}>
            Achievers Academy
          </Text>
          <Text
            fontSize="sm"
            color="gray.200"
            textAlign="justify"
            lineHeight="1.8"
          >
            Achievers Academy has built a strong reputation over 25 years in the
            overseas education industry, offering expert counseling, test prep,
            and application guidance. Our honest, personalized approach helps
            students reach their full potential and secure the opportunities
            they deserve. If you're seeking a dedicated partner for your study
            abroad journey, look no further. Join us and experience reliable
            support every step of the way.
          </Text>
        </Box>

        {/* Vertical Divider Line in Center */}
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          top={0}
          bottom={0}
          left="50%"
          width="1px"
          bg="gray.400"
          opacity={0.5}
        />

        {/* Right Section - Contents & Hours */}
    <Flex
  direction="row"
  flex="1"
  justify="space-between"
  gap={4}
  flexWrap="wrap"
  pl={{ md: 12 }}
  ml="auto"
  zIndex={1}
>
  {/* Contents */}
  <Box flex="1" minW="150px">
    <Text fontWeight="bold" fontSize="md" mb={2}>
      Contents
    </Text>
    <VStack align="start" spacing={4}>
      <Text fontSize="sm" color="gray.200">About Us</Text>
      <Text fontSize="sm" color="gray.200">Services</Text>
      <Text fontSize="sm" color="gray.200">Testimonials</Text>
      <Text fontSize="sm" color="gray.200">Contact</Text>
      <Text fontSize="sm" color="gray.200">Book an Appointment</Text>
    </VStack>
  </Box>

  {/* Working Hours */}
  <Box flex="1" minW="150px">
    <Text fontWeight="bold" fontSize="md" mb={2}>
      Working Hours
    </Text>
    <VStack align="start" spacing={4}>
      <Text fontSize="sm" color="gray.200">10:00 - 19:00 - Monday - Saturday</Text>
      <Text fontSize="sm" color="gray.200">10:00 - 14:00 - Sunday</Text>
    </VStack>
  </Box>
</Flex>

      </Flex>

      {/* Bottom Divider & Copyright */}
      <Divider my={5} borderColor="gray.500" />
      <Text textAlign="center" fontSize="xs" color="gray.300">
        Copyright © 2025 All rights reserved
      </Text>
    </Box>
  );
};

export default Footer;

// import {
//     Box,
//     Text,
//     VStack,
//     HStack,
//     Icon,
//     Button,
//     Heading,
//     useBreakpointValue,
// } from "@chakra-ui/react";
// import { MdLocationOn, MdAccessTime } from "react-icons/md";
// import event1 from '../../theme/events1.png';
// import event2 from '../../theme/event2.png';

// export default function UpcomingEvents() {
//     const events = [
//         {
//             date: "12 JAN",
//             year: "2024",
//             location: "Hilton Quebec",
//             time: "02:00 pm - 09:00 pm",
//             title: "GRE/TOEFL",
//             description:
//                 "GRE a standardized test required for applications to most stem program across countries. TOEFL a language proficiency test that checks candidates english language abilities.",
//             image: event1,
//         },
//         {
//             date: "12 JAN",
//             year: "2024",
//             location: "Hilton Quebec",
//             time: "02:00 pm - 09:00 pm",
//             title: "GRE/TOEFL",
//             description:
//                 "GRE a standardized test required for applications to most stem program across countries. TOEFL a language proficiency test that checks candidates english language abilities.",
//             image: event2,
//         },
//     ];

//     const isMobile = useBreakpointValue({ base: true, md: false });

//     return (
//         <Box bg="white" py={12} px={4} display="flex" justifyContent="center">
//             <Box w="100%" maxW="1200px">
//                 <Heading
//                     textAlign="center"
//                     mb={10}
//                     fontSize={{ base: "2xl", md: "3xl" }}
//                     color="#0B3D91"
//                 >
//                     Upcoming Events
//                 </Heading>

//                 {isMobile ? (
//                     <HStack spacing={4} overflowX="auto" pb={4}>
//                         {events.map((event, index) => (
//                             <EventCard key={index} event={event} />
//                         ))}
//                     </HStack>
//                 ) : (
//                     <Box display="grid" gridTemplateColumns="1fr 1fr" gap={16}>
//                         {events.map((event, index) => (
//                             <EventCard key={index} event={event} />
//                         ))}
//                     </Box>
//                 )}
//             </Box>
//         </Box>
//     );
// }

// function EventCard({ event }) {
//     return (
//         <Box
//             position="relative"
//             bgImage={`url(${event.image})`}
//             bgSize="cover"
//             bgPos="center"
//             borderRadius="lg"
//             overflow="hidden"
//             minH="350px"
//             w="100%"
//             flexShrink={0}
//             transition="all 0.3s ease-in-out"
//             _hover={{
//                 transform: "scale(1.03)",
//                 boxShadow: "lg",
//             }}
//         >
//             {/* Top Overlay */}
//             <Box
//                 bg="rgba(0,0,0,0.7)"
//                 color="white"
//                 borderRadius="xl"
//                 px={4}
//                 py={3}
//                 position="absolute"
//                 top={4}
//                 left={4}
//                 display="flex"
//                 alignItems="center"
//                 gap={4}
//                 zIndex={2}
//             >
//                 <VStack spacing={0} align="start">
//                     <Text fontWeight="bold" fontSize="sm">
//                         {event.date}
//                     </Text>
//                     <Text fontSize="xs" opacity={0.8}>
//                         {event.year}
//                     </Text>
//                 </VStack>
//                 <Box h="32px" w="1px" bg="whiteAlpha.400" />
//                 <VStack align="start" spacing={1}>
//                     <HStack spacing={1}>
//                         <Icon as={MdLocationOn} fontSize="16px" />
//                         <Text fontSize="xs">{event.location}</Text>
//                     </HStack>
//                     <HStack spacing={1}>
//                         <Icon as={MdAccessTime} fontSize="16px" />
//                         <Text fontSize="xs">{event.time}</Text>
//                     </HStack>
//                 </VStack>
//             </Box>

//             {/* Bottom Overlay */}
//             <Box
//                 position="absolute"
//                 bottom={0}
//                 left={0}
//                 right={0}
//                 px={6}
//                 py={5}
//                 bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
//                 color="white"
//                 zIndex={1}
//             >
//                 <HStack justify="space-between" align="flex-end" flexWrap="wrap">
//                     <Box maxW="70%">
//                         <Text fontSize="xl" fontWeight="bold" mb={1}>
//                             {event.title}
//                         </Text>
//                         <Text fontSize="sm" mb={0} noOfLines={4}>
//                             {event.description}
//                         </Text>
//                     </Box>
//                     <Button
//                         fontSize="sm"
//                         bg="#134BE4"
//                         color="white"
//                         _hover={{ bg: "#0F3DB6" }}
//                     >
//                         VIEW DETAILS
//                     </Button>
//                 </HStack>
//             </Box>
//         </Box>
//     );
// }
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import event2 from '../../img/Events/1.png';


function NoEvents() {
  return (
    <Box textAlign="center" py={10} px={6} >
      {/* <Text fontSize="32px" fontWeight="bold" color="blue.800"mb={2} >
        Upcoming Events
      </Text> */}
      <VStack spacing={4}>
        <Image
        zindex = {0}
          src={event2}// Replace with actual image path
          alt="No Events"
          boxSize="400px"
          mx="auto"
        />
        {/* <Text fontSize="2xl" fontWeight="semibold" color="blue.700">
          No Upcoming Events
        </Text>
        <Text color="gray.600" fontSize="lg">
          Check back later for updates
        </Text> */}
      </VStack>
    </Box>
  );
}

export default NoEvents;

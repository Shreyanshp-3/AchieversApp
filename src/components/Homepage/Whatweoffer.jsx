import { Box, Heading, Text, Image, IconButton, Flex } from "@chakra-ui/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import wwo from "../../theme/wwo1.png";
import wwo2 from "../../theme/wwo2.png";
import wwo3 from "../../theme/wwo3.png";
import wwo4 from "../../theme/wwo4.png";

const offerings = [
  {
    title: "TEST PREP",
    description:
      "GRE is a standardized test required for applications to most STEM programs across countries. TOEFL is a language proficiency test that checks candidates’ English language abilities.",
    image: wwo,
  },
  {
    title: "PROFILE BUILDING",
    description:
      "Profile building is an activity to help students identify their interest domain and curate an impressive technical profile to showcase to high-ranked universities abroad.",
    image: wwo2,
  },
  {
    title: "VISA COUNSELLING",
    description:
      "Our comprehensive approach is designed to help you navigate the college application process with confidence. Right from university applications to documentation we have got you covered.",
    image: wwo4,
  },
  {
    title: "APPLICATION COUNSELLING",
    description:
      "To help students navigate the visa process through mock interviews, concise financial documentation, and appointment bookings.",
    image: wwo3,
  },
];

export default function WhatWeOffer() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / 3;
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box py={{ base: 4, md: 12 }} px={{ base: 3, md: 6 }} bg="white" position="relative">
      <Heading
        textAlign="center"
        fontSize={{ base: "22px", md: "32px" }}
        mb={{ base: 6, md: 10 }}
        color="#0a2c84"
        fontWeight="bold"
      >
        What We Offer
      </Heading>

      {/* Arrow Buttons */}
      <IconButton
        icon={<ChevronLeft size={22} />}
        aria-label="Scroll Left"
        position="absolute"
        left={1}
        top="60%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        onClick={() => scroll("left")}
        display={{ base: "none", md: "flex" }}
      />

      <IconButton
        icon={<ChevronRight size={22} />}
        aria-label="Scroll Right"
        position="absolute"
        right={1}
        top="60%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        onClick={() => scroll("right")}
        display={{ base: "none", md: "flex" }}
      />

      {/* Scrollable Offerings with padding & fixed widths */}
      <Box px={{ base: 2, md: 8 }}>
        <Flex
          ref={scrollRef}
          overflowX="auto"
          pb={1}
          scrollSnapType="x mandatory"
          scrollBehavior="smooth"
        >
          {offerings.map((item, index) => (
            <Box
              key={index}
              flex={{
                base: "0 0 250px",
                md: "0 0 calc(33.3333% - 16px)",
              }}
              mr={index !== offerings.length - 1 ? { base: 4, md: 6 } : 0}
              height="350px"
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              scrollSnapAlign="center"
              bg="gray.800"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.03)",
                boxShadow: "lg",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                objectFit="cover"
                width="100%"
                height="100%"
                opacity={0.85}
                transition="transform 0.5s ease"
              />

              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bgGradient="linear(to-b, rgba(0,0,0,0.2), rgba(0,0,0,0.8))"
                px={4}
                py={5}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                color="white"
              >
                <Text fontWeight="bold" fontSize="lg" mb={2}>
                  {item.title}
                </Text>
                <Text fontSize="sm">{item.description}</Text>
              </Box>

              <IconButton
                icon={<ArrowUpRight size={16} />}
                size="sm"
                variant="solid"
                colorScheme="whiteAlpha"
                position="absolute"
                top="3"
                right="3"
                aria-label="Open"
                borderRadius="full"
                bg="white"
                color="black"
                _hover={{ bg: "gray.200" }}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

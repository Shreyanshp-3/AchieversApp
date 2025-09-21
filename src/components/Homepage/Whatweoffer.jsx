import { Box, Heading, Text, Image, IconButton, Flex } from "@chakra-ui/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

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
      "We help students navigate the visa process with ease by providing support through mock interviews, concise guidance on financial documentation, and appointment scheduling services.",
    image: wwo4,
  },
  {
    title: "APPLICATION COUNSELLING",
    description:
      "Our comprehensive approach is designed to help you navigate the college application process with confidence. Right from university applications to documentation we have got you covered.",
    image: wwo3,
  },
];

export default function WhatWeOffer() {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const visibleCards = 3;
  const cardWidth = 350;
  const gap = 24;

  const scroll = (direction) => {
    let newIndex = scrollIndex;
    if (direction === "left" && scrollIndex > 0) {
      newIndex = scrollIndex - 1;
    } else if (direction === "right" && scrollIndex < offerings.length - visibleCards) {
      newIndex = scrollIndex + 1;
    }
    setScrollIndex(newIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: newIndex * (cardWidth + gap),
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
        icon={<ChevronLeft size={28} />}
        aria-label="Scroll Left"
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        onClick={() => scroll("left")}
        display={{ base: "none", md: "flex" }}
        disabled={scrollIndex === 0}
        _disabled={{ opacity: 0.3, cursor: "not-allowed" }}
      />

      <IconButton
        icon={<ChevronRight size={28} />}
        aria-label="Scroll Right"
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        onClick={() => scroll("right")}
        display={{ base: "none", md: "flex" }}
        disabled={scrollIndex >= offerings.length - visibleCards}
        _disabled={{ opacity: 0.3, cursor: "not-allowed" }}
      />

      <Box px={{ base: 2, md: 0 }}>
        <Flex
          ref={scrollRef}
          overflowX="auto"
          pb={1}
          scrollSnapType="x mandatory"
          scrollBehavior="smooth"
          width={{ base: "100%", md: "1224px" }} // 3*350 + 2*24 + extra for spacing
          maxWidth="100vw"
          mx="auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {offerings.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.title.replace(/\s+/g, '').toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                flex="0 0 350px"
                mr={index !== offerings.length - 1 ? `${gap}px` : 0}
                height="350px"
                width="350px"
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
                  borderRadius: "lg",
                  overflow: "hidden",
                }}
                display="flex"
                flexDirection="column"
                as="div"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  opacity={0.95}
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
                  <Text fontWeight="bold" fontSize="lg" mb={2} letterSpacing="0.5px">
                    {item.title}
                  </Text>
                  <Text fontSize="sm">{item.description}</Text>
                </Box>

                <IconButton
                  icon={<ArrowUpRight size={18} />}
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
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
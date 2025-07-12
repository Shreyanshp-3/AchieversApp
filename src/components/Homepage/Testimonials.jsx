// Testimonials.jsx
import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

// Dummy data
const testimonials = [
  {
    name: "Aditya Kothari",
    major: "MS in Aerospace Engineering",
    image: "/img/aditya.jpg", // Replace with actual path or URL
    admits: [
      "Stanford University, CA, USA",
      "Georgia Tech, USA",
      "Purdue University, USA",
      "ISAE-SUPAERO, France",
      "University of Illinois Urbana-Champaign, USA",
    ],
  },
  {
    name: "Viraj Parmaaj",
    major: "MS in Statistics",
    image: "/img/viraj.jpg", // Replace with actual path or URL
    admits: [
      "University of Illinois Urbana-Champaign (UIUC)",
      "University of Maryland College Park",
      "Northeastern University",
    ],
    paragraph: `“Achievers Academy helped me go beyond just preparing for exams like GRE and TOEFL by teaching me the correct approach for the exam using optimal strategy, which greatly helped in the verbal section.

The organization enlightened me with opportunities for profile building through relevant certifications, research outreach, and collaborative projects with peers.

The application phase was intensive, a different process and set of questions for each college—but with Pallavi Ma'am’s guidance, profile polishing, mock interviews, and booking support, the entire experience became structured and smooth.”`,
  },
  {
    name: "Samruddhi Kale",
    major: "MS in Data Science",
    image: "/img/samruddhi.jpg", // Replace with actual path or URL
    admits: [
      "University of Southern California (USC)",
      "Boston University",
      "George Washington University (GWU)",
      "Indiana University Bloomington (IUB)",
    ],
  },
];

// Card Component
const TestimonialCard = ({ data, isCenter }) => (
  <Box
    bg="#0C2B57"
    color="white"
    borderRadius="lg"
    p={5}
    w={isCenter ? "500px" : "300px"}
    minH={isCenter ? "auto" : "350px"}
    boxShadow={isCenter ? "lg" : "base"}
    border={isCenter ? "2px solid #ffffff30" : "1px solid #ffffff20"}
    transition="all 0.3s"
    overflow="hidden"
  >
    <Flex align="center" mb={4}>
      <Image
        src={data.image}
        boxSize="70px"
        borderRadius="full"
        objectFit="cover"
        mr={4}
      />
      <Box>
        <Text fontWeight="bold">{data.name}</Text>
        <Text fontSize="sm" color="gray.300">
          Major: {data.major}
        </Text>
      </Box>
    </Flex>
    <Box mb={2}>
      <Text fontWeight="semibold" mb={1}>
        Admits:
      </Text>
      <UnorderedList spacing={1} fontSize="sm" pl={5}>
        {data.admits.map((a, idx) => (
          <ListItem key={idx}>{a}</ListItem>
        ))}
      </UnorderedList>
    </Box>
    {isCenter && data.paragraph && (
      <Text fontSize="sm" color="gray.200" mt={3} whiteSpace="pre-line">
        {data.paragraph}
      </Text>
    )}
  </Box>
);

// Main Component
export default function Testimonials() {
  const centerIndex = 1; // The middle card (Viraj)

  return (
    <Box bg="#012C6D" py={12} px={[4, 10]}>
      <Heading
        color="white"
        textAlign="center"
        mb={10}
        fontSize={["2xl", "3xl", "4xl"]}
      >
        Hear From Our Achievers
      </Heading>

      <Flex
        py={4}
        overflowX="auto"
        justifyContent="center"
        flexWrap="nowrap"
        gap={6}
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} data={t} isCenter={i === centerIndex} />
        ))}
      </Flex>
    </Box>
  );
}

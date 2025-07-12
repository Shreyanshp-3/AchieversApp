import t1 from "../../img/teachers/t1.png";
import t2 from "../../img/teachers/t2.png";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Container,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const trainers = [
  {
    name: "Pallavi Desai",
    role: "Center Head & English Faculty",
    description:
      "With 30 years of teaching experience behind her, Mrs. Desai dispenses expert tips and techniques for the GRE Verbal and AWA sections that engage students across all diaspora. When it comes to the much dreaded speaking section of TOEFL, there’s no looking beyond her. Her technical mentorship is also highly sought after by students from all corners of the country and beyond.",
    image: t1,
  },
  {
    name: "Gitesh Andhari",
    role: "Math Faculty",
    description:
      "Attuned to students’ requirements, Mr. Andhari makes Math fun! Never taking Math fundamentals for granted, he unwraps every topic from scratch and extracts tons of practice from aspirants. His unbridled love for the subject puts every student at ease. This young albeit dedicated faculty has a strong student connect that makes his pedagogy very accessible too.",
    image: t2,
  },
];

const Trainers = () => {
  return (
    <Box py={10} bg="white">
      <Container maxW="7xl">
        <Heading
          as="h2"
          textAlign="center"
          mb={10}
          fontSize={{ base: "2xl", md: "3xl" }}
          color="blue.900"
        >
          Our Expert Trainers
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {trainers.map((trainer, index) => (
            <Box
              key={index}
              bg="white"
              boxShadow="sm"
              p={{ base: 4, md: 5 }}
              borderRadius="md"
              display="flex"
              gap={4}
              flexDirection="row"
              alignItems="flex-start"
            >
              <Image
                src={trainer.image}
                alt={trainer.name}
                borderRadius="md"
                objectFit="cover"
                width={{ base: "100px", md: "160px" }}
                height={{ base: "140px", md: "240px" }}
              />
              <VStack align="start" spacing={1} flex="1">
                <Text fontWeight="bold" fontSize={{ base: "12px", md: "lg" }}>
                  {trainer.name}
                </Text>
                <Link color="blue.500" fontSize={{ base: "8px", md: "sm" }}>
                  {trainer.role}
                </Link>
                <Text fontSize={{ base: "8px", md: "sm" }} mt={2}>
                  {trainer.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Trainers;

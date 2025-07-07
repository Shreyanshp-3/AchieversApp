import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Aditya Kothari",
    major: "MS in Aerospace Engineering",
    admits: [
      "Stanford University, CA, USA",
      "Georgia Tech, USA",
      "Purdue University, USA",
      "ISAE-SUPAERO, France",
      "University of Illinois Urbana-Champaign, USA",
    ],
    image: "/img/testimonials/aditya.jpg",
  },
  {
    name: "Viraj Parmar",
    major: "MS in Statistics",
    admits: [
      "University of Illinois Urbana-Champaign",
      "University of Maryland College Park",
      "Northeastern University",
    ],
    image: "/img/testimonials/viraj.jpg",
    text: `"Achievers Academy helped me go beyond just preparing for exams like GRE and TOEFL by teaching me the 'correct' approach for the exam using optimal strategy, which greatly helped in the verbal section.\n\nThey constantly enlightened me with opportunities for profile building through relevant certifications, research outreach, and collaborative projects with our academy peers, which I believe is one of the unique practices that set Achievers apart.\n\nThe application phase was intensive, a different process and set of questions for each college, but with Pallavi Ma'am's resolute guidance and patience over multiple SOP iterations to make it perfect, I was able to present my profile effectively. The mock interviews, giving me full confidence during the actual event which can be rather daunting."`,
  },
  {
    name: "Samruddhi Kale",
    major: "MS in Data Science",
    admits: [
      "University of Southern California (USC)",
      "Boston University",
      "George Washington University (GWU)",
      "Indiana University Bloomington (IUB)",
    ],
    image: "/img/testimonials/samruddhi.jpg",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 30,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    centered: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const getCardStyle = (index) => {
    if (index === currentSlide) {
      return {
        transform: "scale(1.05)",
        transition: "all 0.4s ease",
        backgroundColor: "white",
        color: "black",
        padding: "1.5rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        height: "auto",
        maxWidth: "500px",
        zIndex: 2,
      };
    } else {
      return {
        transform: "scale(0.9)",
        transition: "all 0.4s ease",
        backgroundColor: "white",
        color: "black",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        height: "300px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        zIndex: 1,
      };
    }
  };

  return (
    <Box bg="#0C4C7C" py={10} px={4} color="white">
      <Heading textAlign="center" fontSize={{ base: "2xl", md: "3xl" }} mb={8}>
        Hear From Our Achievers
      </Heading>

      <Box
        ref={sliderRef}
        className="keen-slider"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {testimonials.map((person, index) => (
          <Box
            key={index}
            className="keen-slider__slide"
            style={getCardStyle(index)}
          >
            <VStack align="start" spacing={3}>
              <HStack spacing={4} align="start">
                <Image
                  src={person.image}
                  alt={person.name}
                  borderRadius="full"
                  boxSize="60px"
                  objectFit="cover"
                />
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {person.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Major: {person.major}
                  </Text>
                </Box>
              </HStack>

              <Box>
                <Text fontWeight="bold" fontSize="sm">
                  Admits:
                </Text>
                {person.admits.map((adm, i) => (
                  <Text key={i} fontSize="sm" pl={1}>
                    {i + 1}. {adm}
                  </Text>
                ))}
              </Box>

              {person.text && (
                <Text fontSize="sm" mt={2} fontStyle="italic">
                  {person.text}
                </Text>
              )}
            </VStack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;

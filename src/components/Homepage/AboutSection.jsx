import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import heroImage from "../../theme/1.png";
import heroImage2 from "../../theme/2.png";

export default function AboutSection() {
    return (
        <Box position="relative" top="4" bg="white" py={12} px={6} overflow="hidden">
            {/* Blue Background Top Half */}
            <Box
                position="absolute"
                top="4"
                left="0"
                width="100%"
                height={{ base: "50%", md: "62%" }}
                bgGradient="linear(to-r, #1873c8, #0a2c84)"
                zIndex={0}
            />
            {/* Blue Background Top Half */}
            <Box
                position="absolute"
                top="4"
                left="0"
                width="100%"
                height="50%"
                bgGradient="linear(to-r, #1873c8, #0a2c84)"
                zIndex={0}
            >
                {/* Decorative White Circles */}
                {/* Blue Background Top Half */}
                <Box
                    position="absolute"
                    top="4"
                    left="0"
                    width="100%"
                    height="50%"
                    bgGradient="linear(to-r, #1873c8, #0a2c84)"
                    zIndex={0}
                >
                    {/* Wrapper to scale the whole dot pattern */}
                    <Box
                        position="absolute"
                        top={{ base: "-4", sm: "2", md: "2", lg: "-5" }}
                        right={{ base: "2", sm: "4", md: "2", lg: "4" }}
                        transform={{ base: "scale(0.4)", md: "scale(1)" }}
                        transformOrigin="top right"
                        zIndex={0}
                    >
                        {[
                            { cols: 4 }, // rows 0-2
                            { cols: 3 }, // rows 3-5
                            { cols: 2 }, // rows 6-8
                            { cols: 1 }, // rows 9-11
                        ].flatMap((group, groupIndex) =>
                            Array.from({ length: 3 }).map((_, rowOffset) => {
                                const row = groupIndex * 3 + rowOffset;
                                return Array.from({ length: group.cols }).map((_, colIndex) => (
                                    <Box
                                        key={`dot-${row}-${colIndex}`}
                                        position="absolute"
                                        top={`${20 + row * 14}px`}
                                        right={`${colIndex * 12}px`}
                                        width="5px"
                                        height="5px"
                                        borderRadius="full"
                                        bg="white"
                                        opacity={0.7}
                                    />
                                ));
                            })
                        )}
                    </Box>




                </Box>

                {/* Add more for variation */}
            </Box>


            {/* Main Content */}
            <Flex
                maxW="1200px"
                mx="auto"
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                position="relative"
                zIndex={1}
            >
                {/* Left Text Block */}
                <Box flex="1.2" pr={{ base: 0, md: 8 }}>
                    <Heading
                        color="white"
                        fontSize={{ base: "28px", md: "36px" }}
                        fontWeight="800"
                        fontFamily="Montserrat"
                        mb={6}
                    >
                        About Us
                    </Heading>

                    <Box
                        bg="white"
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        maxW="700px" // Increased width
                    >
                        <Text
                            fontSize="18px"
                            fontWeight="400"
                            color="black"
                            fontFamily="Montserrat"
                            lineHeight="1.6"
                            textAlign="justify"
                        >
                            In the dense overseas education industry, Achievers Academy stands tall with a
                            formidable reputation, crafted over 24 years of immaculate counselling experience.
                            An honest approach towards test prep, university shortlisting and holistic application
                            guidance, Achievers Academy continues in its journey of helping students realize their
                            full potential and landing them opportunities that they truly deserve. So, your quest
                            for a truly invested partner to guide you towards your overseas education dreams ends
                            here. Thoroughly individual approach, personal accountability and consistent hand
                            holding have earned us tremendous credibility in the industry. Come join us and be a
                            part of a reliable service partner who will facilitate your dreams and beyond.
                        </Text>
                    </Box>
                </Box>

                {/* Right Images */}
                <Box
                    flex="0.8"
                    mt={{ base: 10, md: 0 }}
                    position="relative"
                    height={{ base: "280px", md: "320px" }}
                    > <Flex
                    position="absolute"
                    top="-20px"
                    left="64%"
                    transform="translateX(-50%)"
                    gap="3"
                    zIndex="1"
                >
                        {/* Filled Dot */}
                        <Box
                            width="20px"
                            opacity="0.7"
                            height="20px"
                            borderRadius="full"
                            border="2px solid white"
                            bg="transparent"
                        />
                    </Flex>

                    <Image
                        src={heroImage}
                        alt="Main"
                        borderRadius="full"
                        boxSize={{ base: "180px", md: "260px" }}
                        objectFit="cover"
                        position="absolute"
                        top="30px"
                        right="20px"
                        zIndex="1"
                    />

                    <Image
                        src={heroImage2}
                        alt="Top Right Small"
                        borderRadius="full"
                        boxSize="100px"
                        objectFit="cover"
                        position="absolute"
                        top="0"
                        right="0"
                        zIndex="2"
                    />   <Flex
                        position="absolute"
                        top="150px"
                        left="27%"
                        transform="translateX(-50%)"
                        gap="3"
                        zIndex="1"
                    >
                        {/* Filled Dot */}
                        <Box
                            width="20px"
                            opacity="0.7"
                            height="20px"
                            borderRadius="full"
                            bg="white"
                        />
                    </Flex>
                    <Image
                        src={heroImage2}
                        alt="Bottom Left Small"
                        borderRadius="full"
                        boxSize="100px"
                        objectFit="cover"
                        position="absolute"
                        bottom="0"
                        left="90px"
                        zIndex="2"
                    />
                </Box>
            </Flex>
        </Box>
    );
}

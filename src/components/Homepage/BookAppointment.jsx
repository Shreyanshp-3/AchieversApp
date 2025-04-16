import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import appointmentBg from "../../theme/ILLUSTRATION.png";

export default function BookAppointment() {
    return (
        <Box
            bg="#f3f3f3"
            px={{ base: 4, md: 12 }}
            py={{ base: 8, md: 16 }}
            position="relative"
            overflow="hidden"
        >
            <Flex
                maxW="1200px"
                mx="auto"
                direction="column"
                align={{ base: "center", md: "flex-start" }}
                position="relative"
                zIndex={1}
                textAlign={{ base: "center", md: "left" }}
            >
                <Box
                    maxW="600px"
                    mb={6}
                    zIndex={2}
                >
                    <Heading
                        fontSize={{ base: "22px", md: "40px" }}
                        color="#003366"
                        fontWeight="800"
                        mb={4}
                    >
                        Book an Appointment
                    </Heading>
                    <Text
                        fontSize={{ base: "15px", md: "18px" }}
                        color="#003366"
                        mb={6}
                        lineHeight="1.7"
                    >
                        Ready to take the next step towards your study abroad dreams?
                        Book an appointment with our expert team today and get
                        personalized guidance tailored to your goals.
                    </Text>
                    <Button
                        bg="#1a46e4"
                        color="white"
                        size="md"
                        fontWeight="semibold"
                        borderRadius="lg"
                        width={{ base: "100%", md: "auto" }}
                        _hover={{ bg: "#1539bb", transform: "scale(1.03)" }}
                        transition="all 0.3s ease"
                    >
                        BOOK AN APPOINTMENT
                    </Button>
                </Box>
            </Flex>

            {/* Bottom-right image with spacing */}
            <Box
                position="absolute"
                right={{ base: "0", md: "20px" }}
                bottom="0"
                maxW={{ base: "100%", md: "600px" }}
                zIndex={0}
            >
                <Image
                    src={appointmentBg}
                    alt="Appointment Illustration"
                    objectFit="cover"
                    width="100%"
                />
            </Box>
        </Box>
    );
}

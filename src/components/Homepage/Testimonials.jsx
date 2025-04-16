import {
    Box,
    Text,
    Avatar,
    VStack,
    Circle,
    HStack,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";

const testimonials = [
    {
        name: "Avinash Shukla",
        role: "English Faculty",
        image: "/avatar1.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        badge: "V"
    },
    {
        name: "Avinash Shukla",
        role: "English Faculty",
        image: "/avatar2.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        badge: "V"
    },
    {
        name: "Avinash Shukla",
        role: "English Faculty",
        image: "/avatar3.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        badge: "V"
    },
    {
        name: "Avinash Shukla",
        role: "English Faculty",
        image: "/avatar4.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        badge: "V"
    }
];

export default function TestimonialSection() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Box bg="#024877" color="white" py={10} px={4} textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" mb={8}>
                Hear from our Achievers
            </Text>

            <Box position="relative" maxW="100%" mx="auto" px={{ base: 2, md: 10 }}>
                {/* Left Arrow */}
                <IconButton
                    aria-label="Previous"
                    icon={<ChevronLeftIcon boxSize={6} />}
                    variant="ghost"
                    color="white"
                    position="absolute"
                    left={0}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    onClick={() => swiperRef.current?.slidePrev()}
                    _hover={{ bg: "transparent" }}
                    display={{ base: "none", md: "flex" }} // 👈 Hide on mobile
                />

                {/* Swiper Carousel */}
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    slidesPerView={1}
                    spaceBetween={4}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 4  // 👈 Tighter space between cards
                        }
                    }}
                >

                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Box
                                w="100%"
                                maxW="400px"
                                mx="auto"
                                borderRadius="lg"
                                overflow="hidden"
                                border="1px solid rgba(255,255,255,0.2)"
                                bg="rgba(255,255,255,0.2)"
                                backdropFilter="blur(5px)"
                                px={6}
                                py={5}
                                position="relative"
                                _hover={{ boxShadow: "lg", transform: "translateY(-2px)", transition: "0.3s" }}
                            >
                                <HStack align="center" mb={4}>
                                    <Avatar src={item.image} name={item.name} />
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="bold">{item.name}</Text>
                                        <Text fontSize="sm" opacity={0.8}>
                                            {item.role}
                                        </Text>
                                    </VStack>
                                </HStack>

                                <Text fontSize="sm" textAlign="left" opacity={0.9}>
                                    {item.text}
                                </Text>

                                <Circle
                                    size="24px"
                                    border="2px solid white"
                                    position="absolute"
                                    top={3}
                                    right={3}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Arrow */}
                <IconButton
                    aria-label="Next"
                    icon={<ChevronRightIcon boxSize={6} />}
                    variant="ghost"
                    color="white"
                    position="absolute"
                    right={0}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    onClick={() => swiperRef.current?.slideNext()}
                    _hover={{ bg: "transparent" }}
                    display={{ base: "none", md: "flex" }} // 👈 Hide on mobile
                />

            </Box>

            {/* Dots */}
            <HStack justify="center" mt={6} spacing={2}>
                {testimonials.map((_, idx) => (
                    <Circle
                        key={idx}
                        size="10px"
                        bg={activeIndex === idx ? "whiteAlpha.800" : "whiteAlpha.500"}
                    />
                ))}
            </HStack>

            {/* CTA Button */}
            <Button mt={6} bg="#1446FF" color="white" _hover={{ bg: "#1139cc" }}>
                LEARN MORE
            </Button>
        </Box>
    );
}

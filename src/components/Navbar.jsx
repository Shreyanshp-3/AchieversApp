import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const NavLink = ({ children, isActive = false }) => (
  <Link
    px={3}
    py={2}
    rounded={"md"}
    fontFamily="Montserrat"
    fontSize="16px"
    fontWeight="500"
    color={isActive ? "#000000" : "#999999"}
    _hover={{
      textDecoration: "none",
      color: "#000000",
      bg: "blue.50",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top="0" zIndex="999">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" fontFamily="Montserrat">🎓 Achievers</Box>

        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={6} alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <NavLink isActive>Home</NavLink>
          <NavLink>About Us</NavLink>

          <Menu>
            <MenuButton
              px={3}
              py={2}
              rounded="md"
              fontFamily="Montserrat"
              fontSize="16px"
              fontWeight="500"
              color="#999999"
              _hover={{ color: "#000", bg: "blue.50" }}
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
            >
              Services
            </MenuButton>
            <MenuList>
              <MenuItem>Test Prep</MenuItem>
              <MenuItem>Profile Building</MenuItem>
              <MenuItem>Visa Counselling</MenuItem>
            </MenuList>
          </Menu>

          <NavLink>Testimonials</NavLink>
          <NavLink>Contact Us</NavLink>
        </HStack>

        <Button
          bg="#134BE4"
          color="white"
          fontSize="16px"
          fontWeight="500"
          fontFamily="Montserrat"
          _hover={{ bg: "#0f3fbe" }}
          size="sm"
          p="6"
          display={{ base: "none", md: "inline-flex" }}
        >
          Book an Appointment
        </Button>
      </Flex>

      {isOpen && (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              textAlign="center"
              fontSize="14px"
              fontWeight="700"
              color="#134BE4"
              fontFamily="Montserrat"
              textTransform="uppercase"
            >
              Main Menu
            </DrawerHeader>
            <DrawerCloseButton />

            <DrawerBody mt={4} display="flex" flexDirection="column" justifyContent="space-between" pb={6}>
              <VStack align="start" spacing={4}>
                {/* Active Home */}
                <Box w="full" bg="#F0F4FF" borderRadius="md">
                  <Text
                    px={4}
                    py={2}
                    fontFamily="Montserrat"
                    fontWeight="bold"
                    fontSize="16px"
                    color="#134BE4"
                    borderLeft="4px solid #134BE4"
                  >
                    Home
                  </Text>
                </Box>

                {/* About Us */}
                <Text
                  px={4}
                  py={2}
                  fontFamily="Montserrat"
                  fontWeight="medium"
                  fontSize="16px"
                  color="#999999"
                >
                  About Us
                </Text>

                {/* Toggleable Services */}
                <Box w="full">
                  <Button
                    onClick={toggleServices}
                    px={4}
                    py={2}
                    w="full"
                    justifyContent="space-between"
                    variant="ghost"
                    fontFamily="Montserrat"
                    fontWeight="medium"
                    fontSize="16px"
                    color={servicesOpen ? "#134BE4" : "#999999"}
                    bg={servicesOpen ? "#F0F4FF" : "transparent"}
                    borderLeft={servicesOpen ? "4px solid #134BE4" : "4px solid transparent"}
                    _hover={{ bg: "#F0F4FF" }}
                    rightIcon={servicesOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  >
                    Services
                  </Button>
                  {servicesOpen && (
                    <VStack align="start" spacing={2} mt={2} pl={6}>
                      <Text fontSize="14px" color="#999999">SERVICE 01</Text>
                      <Text fontSize="14px" color="#999999">SERVICE 02</Text>
                      <Text fontSize="14px" color="#999999">SERVICE 03</Text>
                      <Text fontSize="14px" color="#999999">SERVICE 04</Text>
                    </VStack>
                  )}
                </Box>

                <Text
                  px={4}
                  py={2}
                  fontFamily="Montserrat"
                  fontWeight="medium"
                  fontSize="16px"
                  color="#999999"
                >
                  Testimonials
                </Text>
                <Text
                  px={4}
                  py={2}
                  fontFamily="Montserrat"
                  fontWeight="medium"
                  fontSize="16px"
                  color="#999999"
                >
                  Contact Us
                </Text>
              </VStack>

              {/* Bottom buttons */}
              <VStack mt={10} spacing={4}>
                <Button
                  w="100%"
                  bg="#134BE4"
                  color="white"
                  fontWeight="600"
                  fontSize="14px"
                  borderRadius="md"
                  fontFamily="Montserrat"
                  _hover={{ bg: "#0f3fbe" }}
                >
                  Book an Appointment
                </Button>
                <Button
                  w="100%"
                  variant="outline"
                  borderColor="#134BE4"
                  color="#134BE4"
                  fontWeight="600"
                  fontSize="14px"
                  borderRadius="md"
                  fontFamily="Montserrat"
                  onClick={onClose}
                >
                  Close Menu
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
}

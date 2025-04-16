import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
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
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const NavLink = ({ to, children, isActive = false }) => (
    <ChakraLink
      as={RouterLink}
      to={to}
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
    >
      {children}
    </ChakraLink>
  );

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
          <NavLink to="/" isActive>Home</NavLink>
          <NavLink to="/aboutus" >About Us</NavLink>

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
              <MenuItem>Application Counselling</MenuItem>
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
                  <NavLink to="/" isActive>
                    Home
                  </NavLink>
                </Box>

                {/* About Us */}
                <NavLink to="/aboutus">About Us</NavLink>

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
                      <NavLink to="/testprep">Test Prep</NavLink>
                      <NavLink to="/profilebuilding">Profile Building</NavLink>
                      <NavLink to="/visacounselling">Visa Counselling</NavLink>
                      <NavLink to="/applicationcounselling">Application Counselling</NavLink>
                    </VStack>
                  )}
                </Box>

                <NavLink to="/testimonials">Testimonials</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
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

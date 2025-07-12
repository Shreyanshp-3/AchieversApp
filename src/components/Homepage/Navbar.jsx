import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  Spacer,
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
  Image,
  Link
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import logo from "../../img/mainlogo/logoname.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <ChakraLink
        as={RouterLink}
        to={to}
        px={3}
        py={2}
        rounded={"md"}
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight={isActive ? "600" : "500"}
        color={isActive ? "#024877" : "#999999"}
        _hover={{
          textDecoration: "none",
          color: "#024877",
          bg: "blue.50",
          // fontWeight: "600",
        }}
      >
        {children}
      </ChakraLink>
    );
  };



  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top="0" zIndex="999">
      <Flex h={16} alignItems={"center"} position="relative" w="100%" justifyContent={"space-between"}>
        {/* <Box fontWeight="bold" fontFamily="Montserrat">🎓 Achievers</Box> */}
        <Image src={logo} alt="Achievers Logo" height="45px" />
        <Spacer /> {/* 👈 Pushes hamburger to the far right */}

        <IconButton

          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={6} alignItems={"center"} display={{ base: "none", md: "flex" }} position="absolute"
          left="50%"
          transform="translateX(-50%)">
          <NavLink to="/">Home</NavLink>
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
              <MenuItem>  <NavLink to="/testprep" >Test Prep</NavLink></MenuItem>


              <MenuItem>  <NavLink to="/profilebuilding" >Profile Building</NavLink></MenuItem>
              <MenuItem>  <NavLink to="/applicationcounseling" >Application Counselling</NavLink></MenuItem>
              <MenuItem>  <NavLink to="/visacounseling" >Visa Counselling</NavLink></MenuItem>
            </MenuList>
          </Menu>

          <NavLink>Testimonials</NavLink>
          <NavLink to="/contactus" >Contact Us</NavLink>
        </HStack>

        <Link
          href="https://calendar.app.google/Pr9G4acTykNThqNS7"
          isExternal
          _hover={{ textDecoration: 'none' }}
        >
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
        </Link>
      </Flex>

      {isOpen && (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              textAlign="center"
              fontSize="14px"
              mb={4}
              mt={2}
              fontWeight="700"
              color="#134BE4"
              fontFamily="Montserrat"
              textTransform="uppercase"
            >
              Quick Links
            </DrawerHeader>
            <DrawerCloseButton mt={2} />

            <DrawerBody mt={4} display="flex" flexDirection="column" justifyContent="space-between" pb={6}>
              <VStack align="center" spacing={4} textAlign="center" w="100%">

                {/* Active Home */}
                <Box w="full" borderRadius="md">
                  <NavLink to="/">
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
                    // justifyContent="space-between"
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
                    <VStack align="center" spacing={2} mt={2} w="100%" textAlign="center">

                      <NavLink to="/testprep">Test Prep</NavLink>
                      <NavLink to="/profilebuilding">Profile Building</NavLink>
                      <NavLink to="/visacounseling">Visa Counselling</NavLink>
                      <NavLink to="/applicationcounseling">Application Counselling</NavLink>
                    </VStack>
                  )}
                </Box>

                <NavLink to="/testimonials">Testimonials</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
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

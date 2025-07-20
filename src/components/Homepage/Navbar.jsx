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
// import { useLocation } from "react-router-dom"; // already present

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";

import logo from "../../img/mainlogo/logoname.png";
import { useLocation } from "react-router-dom"; // already present

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isServicesPage = [
    "/testprep",
    "/profilebuilding",
    "/visacounseling",
    "/applicationcounseling",
  ].some(path => location.pathname.startsWith(path));

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
              fontWeight={isServicesPage ? "600" : "500"}
              color={isServicesPage ? "#024877" : "#999999"}
              _hover={{ color: "#000", bg: "blue.50" }}
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
            >
              Services
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NavLink to="/testprep">Test Prep</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/profilebuilding">Profile Building</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/applicationcounseling">Application Counselling</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/visacounseling">Visa Counselling</NavLink>
              </MenuItem>
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
              <VStack align="stretch" spacing={1} w="100%">
                {/* HOME */}
                <Button
                  as={(props) => (
                    <NavLink
                      {...props}
                      to="/"
                      style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        background: isActive ? "#F0F4FF" : "transparent",
                        color: isActive ? "#134BE4" : "#999999",
                        fontWeight: isActive ? "bold" : "medium",
                        borderRadius: "0",
                        boxShadow: isActive ? "0 2px 8px rgba(19,75,228,0.08)" : "none",
                        border: isActive ? "2px solid #134BE4" : "2px solid transparent",
                        textAlign: "center",
                      })}
                    />
                  )}
                  variant="ghost"
                  w="100%"
                  px={0}
                  py={5}
                  justifyContent="center"
                  fontFamily="Montserrat"
                  fontSize="18px"
                  textAlign="center"
                  _hover={{ bg: "#F0F4FF", color: "#134BE4" }}
                >
                  Home
                </Button>

                {/* ABOUT US */}
                <Button
                  as={(props) => (
                    <NavLink
                      {...props}
                      to="/aboutus"
                      style={({ isActive }) => ({
                        display: "block",
                        width: "100%",
                        background: isActive ? "#F0F4FF" : "transparent",
                        color: isActive ? "#134BE4" : "#999999",
                        fontWeight: isActive ? "bold" : "medium",
                        borderRadius: "0",
                        boxShadow: isActive ? "0 2px 8px rgba(19,75,228,0.08)" : "none",
                        border: isActive ? "2px solid #134BE4" : "2px solid transparent",
                        textAlign: "center",
                      })}
                    />
                  )}
                  variant="ghost"
                  w="100%"
                  px={0}
                  py={5}
                  justifyContent="center"
                  fontFamily="Montserrat"
                  fontSize="18px"
                  textAlign="center"
                  _hover={{ bg: "#F0F4FF", color: "#134BE4" }}
                >
                  About Us
                </Button>

                {/* SERVICES */}
                <Box w="100%">
                  <Button
                    onClick={toggleServices}
                    w="100%"
                    px={0}
                    py={5}
                    variant="ghost"
                    justifyContent="center"
                    fontFamily="Montserrat"
                    fontSize="18px"
                    fontWeight="medium"
                    textAlign="center"
                    color={servicesOpen ? "#134BE4" : "#999999"}
                    bg={servicesOpen ? "#F0F4FF" : "transparent"}
                    borderLeft={servicesOpen ? "4px solid #134BE4" : "4px solid transparent"}
                    borderRadius="0"
                    rightIcon={servicesOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    _hover={{ bg: "#F0F4FF" }}
                  >
                    Services
                  </Button>
                  {servicesOpen && (
                    <VStack align="stretch" spacing={0} mt={2} w="100%">
                      {[
                        { name: "Test Prep", path: "/testprep" },
                        { name: "Profile Building", path: "/profilebuilding" },
                        { name: "Visa Counselling", path: "/visacounseling" },
                        { name: "Application Counselling", path: "/applicationcounseling" },
                      ].map(({ name, path }) => (
                        <Button
                          key={path}
                          as={(props) => (
                            <NavLink
                              {...props}
                              to={path}
                              style={({ isActive }) => ({
                                display: "block",
                                width: "100%",
                                background: isActive ? "#F0F4FF" : "transparent",
                                color: isActive ? "#134BE4" : "#999999",
                                fontWeight: isActive ? "bold" : "medium",
                                borderRadius: "0",
                                boxShadow: isActive ? "0 2px 8px rgba(19,75,228,0.08)" : "none",
                                border: isActive ? "2px solid #134BE4" : "2px solid transparent",
                                textAlign: "center",
                              })}
                            />
                          )}
                          variant="ghost"
                          w="100%"
                          px={0}
                          py={5}
                          justifyContent="center"
                          fontFamily="Montserrat"
                          fontSize="18px"
                          textAlign="center"
                          _hover={{ bg: "#F0F4FF", color: "#134BE4" }}
                        >
                          {name}
                        </Button>
                      ))}
                    </VStack>
                  )}
                </Box>

                {/* TESTIMONIALS */}
                <Button
                  as={(props) => (
                    <NavLink
                      {...props}
                      to="/testimonials"
                      style={({ isActive }) => ({
                        display: "block",
                        width: "100%",
                        background: isActive ? "#F0F4FF" : "transparent",
                        color: isActive ? "#134BE4" : "#999999",
                        fontWeight: isActive ? "bold" : "medium",
                        borderRadius: "0",
                        boxShadow: isActive ? "0 2px 8px rgba(19,75,228,0.08)" : "none",
                        border: isActive ? "2px solid #134BE4" : "2px solid transparent",
                        textAlign: "center",
                      })}
                    />
                  )}
                  variant="ghost"
                  w="100%"
                  px={0}
                  py={5}
                  justifyContent="center"
                  fontFamily="Montserrat"
                  fontSize="18px"
                  textAlign="center"
                  _hover={{ bg: "#F0F4FF", color: "#134BE4" }}
                >
                  Testimonials
                </Button>

                {/* CONTACT US */}
                <Button
                  as={(props) => (
                    <NavLink
                      {...props}
                      to="/contactus"
                      style={({ isActive }) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        background: isActive ? "#F0F4FF" : "transparent",
                        color: isActive ? "#134BE4" : "#999999",
                        fontWeight: isActive ? "bold" : "medium",
                        borderRadius: "0",
                        boxShadow: isActive ? "0 2px 8px rgba(19,75,228,0.08)" : "none",
                        border: isActive ? "2px solid #134BE4" : "2px solid transparent",
                        textAlign: "center",
                      })}
                    />
                  )}
                  variant="ghost"
                  w="100%"
                  px={0}
                  py={5}
                  justifyContent="center"
                  fontFamily="Montserrat"
                  fontSize="18px"
                  textAlign="center"
                  _hover={{ bg: "#F0F4FF", color: "#134BE4" }}
                >
                  Contact Us
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}

    </Box>
  );
}

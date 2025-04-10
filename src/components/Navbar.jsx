import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

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

          {/* Dropdown for Services */}
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

        {/* Book Appointment Button */}
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

      {/* Mobile Navigation */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavLink isActive>Home</NavLink>
            <NavLink>About Us</NavLink>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
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
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

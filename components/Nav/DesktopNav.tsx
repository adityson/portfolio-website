import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  useDisclosure,
  Button,
  Heading,
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { RiMenu4Line } from "react-icons/ri";
import LinkLi from "./LinkLi";
import LinkIcon from "./LinkIcon";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const DesktopNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const router = useRouter();
  useEffect(() => {
    onClose();
  }, [router.pathname]);

  return (
    <>
      <Box
        position="fixed"
        display={{ base: "none", md: "block" }}
        top={10}
        left={10}
      >
        <Button
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
          border="2px solid transparent"
          _hover={{ border: "2px solid #A0AEC0" }}
        >
          <RiMenu4Line size="42px" />
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#2b6cb0">
          <DrawerHeader>
            <Heading
              fontSize="6xl"
              color="white"
              textAlign="center"
              fontFamily="Satisfy"
            >
              Aditya Soni
            </Heading>
          </DrawerHeader>
          <hr
            style={{
              background: "linear-gradient(to right, #2b6cb0, white, #2b6cb0)",
              height: "1px",
              border: "0",
            }}
          />
          <DrawerBody marginTop="6vh">
            <Flex flexDirection="column">
              <LinkLi to="/" LinkText="Home" />
              <LinkLi to="/projects" LinkText="Projects" />
              <LinkLi to="/tech#tech" LinkText="Technology" />
            </Flex>
            <Flex flexDirection="column" marginTop="6vh" alignItems="center">
              <LinkIcon
                icon={<AiFillGithub color="white" />}
                to="https://github.com/adityson/"
              />
              <LinkIcon
                icon={<AiFillLinkedin color="white" />}
                to="https://www.linkedin.com/in/soniaditya10/"
              />
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Heading
              fontSize="4xl"
              color="white"
              textAlign="center"
              fontFamily="Orbitron"
            >
              Portfolio
            </Heading>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DesktopNav;

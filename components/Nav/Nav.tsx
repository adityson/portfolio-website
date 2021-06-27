import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Heading, Box, Stack, useDisclosure } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import LinkLi from "./LinkLi";
import LinkIcon from "./LinkIcon";
import { VscClose } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const mobileNav = useDisclosure();

  const router = useRouter();
  useEffect(() => {
    mobileNav.onClose();
  }, [router.pathname]);

  return (
    <Flex
      as="nav"
      position="fixed"
      alignItems="center"
      wrap="wrap"
      w="100%"
      justifyContent={{ base: "space-between", md: "space-around" }}
      p="8px 4%"
      bgColor="#38B2AC"
      color="white"
    >
      <Flex>
        <Link href="/#intro">
          <Heading
            as="h3"
            size="lg"
            padding="8px"
            textAlign="center"
            width="200px"
            margin={{ base: "0px", md: "0 20px" }}
            borderRadius="15px"
            transition="all 0.2s ease"
            _hover={{ bgColor: "#2C7A7B", cursor: "pointer" }}
          >
            Aditya Soni
          </Heading>
        </Link>
      </Flex>
      <Box
        display={{ base: "block", md: "none" }}
        p="4px"
        onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
        overflow="hidden"
        borderRadius="6px"
        border="1px solid #F0FFF4"
        cursor="pointer"
      >
        {mobileNav.isOpen ? <VscClose /> : <FiMenu />}
      </Box>
      <Box
        display={{ base: mobileNav.isOpen ? "block" : "none", md: "flex" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        {mobileNav.isOpen && (
          <hr
            style={{
              background:
                "linear-gradient(to right, #38B2AC, #C6F6D5, #38B2AC)",
              height: "1px",
              border: "0",
              marginTop: "2px",
            }}
          />
        )}
        <Stack
          spacing={4}
          align="center"
          justifyContent={[
            "center",
            "space-between",
            "space-between",
            "space-between",
          ]}
          direction={["column", "row", "row", "row"]}
          pt={[2, 2, 0, 0]}
          mx={[0, 0, 12, 12]}
        >
          {mobileNav.isOpen && (
            <>
              <LinkLi to="/" LinkText="Home" />
              <LinkLi to="/projects" LinkText="Projects" />
              <LinkLi to="/tech#tech" LinkText="Technologies" />
            </>
          )}
        </Stack>
        <Stack
          spacing={1.5}
          align="center"
          justifyContent={[
            "center",
            "space-between",
            "space-between",
            "space-between",
          ]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <LinkIcon to="https://github.com/adityson/">
            <AiFillGithub size="36px" />
          </LinkIcon>
          <LinkIcon to="https://www.linkedin.com/in/soniaditya10/">
            <AiFillLinkedin size="36px" />
          </LinkIcon>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Nav;

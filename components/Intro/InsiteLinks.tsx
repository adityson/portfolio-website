import React from "react";
import { HStack, Flex, Heading } from "@chakra-ui/react";
import LinkBox from "./LinkBox";

const InsiteLinks = () => {
  return (
    <HStack
      marginTop={{ base: "20px", md: "80px" }}
      justifyContent="space-around"
      spacing={{ base: "5%", md: "10%" }}
    >
      <LinkBox to="/projects">
        <Heading fontSize={{ base: "xl", md: "6xl" }}>Projects</Heading>
      </LinkBox>
      <LinkBox to="/tech#tech">
        <Heading fontSize={{ base: "xl", md: "6xl" }}>Technology</Heading>
      </LinkBox>
    </HStack>
  );
};

export default InsiteLinks;

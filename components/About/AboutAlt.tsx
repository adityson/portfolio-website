import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { ContentOne, ContentTwo, ContentThree } from "./Content";

const AboutAlt = () => {
  return (
    <Flex marginTop="80px" flexDirection="column" alignItems="center" py="10px">
      <Flex marginBottom="10px">
        <Heading as="h2" size="2xl" color="#065666">
          About Me
        </Heading>
      </Flex>
      <Flex
        maxW="1200px"
        maxH="36vh"
        mx={{ base: "20px", md: "0" }}
        marginBottom={{ base: "20px", md: "0" }}
        flexDirection={["column", "column", "row", "row"]}
        border="2px solid #63b3ed"
        borderRadius="20px"
        overflowY="auto"
      >
        <ContentOne />
        <ContentTwo />
        <ContentThree />
      </Flex>
    </Flex>
  );
};

export default AboutAlt;

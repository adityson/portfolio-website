import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import BoxIn from "./BoxIn";

const About = () => {
  return (
    <Flex
      id="about"
      flexDirection="column"
      alignItems="center"
      marginBottom="60px"
      mx="40px"
      paddingTop={{ base: "100px", md: "0px" }}
    >
      <Heading as="h2" size="3xl" marginBottom="36px" color="#065666">
        About Me
      </Heading>
      <Flex flexDirection="column" alignItems="center">
        <BoxIn childWidth="900px" hasPartition={false}>
          <Text fontSize={{ base: "md", md: "xl" }}>
            I'm a pre-final year undergrad student studying Computer Science and
            Engineering at NIT Silchar, India. I'm on the journey to explore the
            diverse field that Computer Science is. I love Web Development,
            trying out technologies, and building various features. This site is
            one of my projects I've put my heart into.
          </Text>
        </BoxIn>
        <BoxIn childWidth="750px" hasPartition={false}>
          <Text fontSize={{ base: "md", md: "xl" }}>
            Problem Solving using Data Structures and Algorithms fascinates me
            so I regularly keep up with that, and I'm enthusiastic to dive deep
            to learn more.
          </Text>
        </BoxIn>
        <BoxIn childWidth="600px" hasPartition={false}>
          <Text fontSize={{ base: "md", md: "xl" }}>
            My interests include playing Tennis and Badminton, and learning
            Japanese (currently elementary level).
          </Text>
        </BoxIn>
      </Flex>
    </Flex>
  );
};

export default About;

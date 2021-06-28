import React from "react";
import { useState } from "react";
import { Flex, Heading, Text, Image, Skeleton } from "@chakra-ui/react";

const Intro = () => {
  const [pfpLoad, setPfpLoad] = useState(false);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      px={{ base: "16px", md: "0px" }}
      flexDirection={["column", "column", "row", "row"]}
      marginTop={{ base: "100px", md: "0" }}
    >
      <Flex margin="10px 30px">
        <Skeleton
          isLoaded={pfpLoad}
          borderRadius="24px"
          boxSize={{ base: "170px", md: "250px" }}
        >
          <Image
            src="/static/images/meee.jpg"
            alt="Aditya Soni (image)"
            onLoad={() => setPfpLoad(true)}
            boxSize={{ base: "170px", md: "250px" }}
            borderRadius="32px"
          />
        </Skeleton>
      </Flex>
      <Flex flexDirection="column">
        <Heading
          as="h1"
          fontSize={{ base: "5xl", md: "7xl" }}
          marginBottom="20px"
          color="#2c5282"
          textAlign={{ base: "center", md: "left" }}
        >
          Hello, I'm Aditya!
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} maxW="650px">
          Welcome! A website about all about me. I plan to regularly maintain
          the domain and add updates to the sections as I venture into the world
          of Software Development.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Intro;

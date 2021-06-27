import React from "react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  to: string;
}

const LinkBox = ({ children, to }: Props) => {
  return (
    <Link href={to}>
      <Flex
        as="button"
        w={{ base: "36vw", md: "28vw" }}
        h={{ base: "10vh", md: "20vh" }}
        border="2px solid #00A3C4"
        borderRadius="20px"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(to right, #2b6cb0 50%, #EDF2F7 50%)"
        backgroundSize="200% 100%"
        backgroundPosition="right bottom"
        _hover={{ backgroundPosition: "left bottom", color: "white" }}
        transition="all 1s ease"
      >
        {children}
      </Flex>
    </Link>
  );
};

export default LinkBox;

import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

interface LinkLiProps {
  to: string;
  LinkText: string;
}

const LinkLi = ({ to, LinkText }: LinkLiProps) => {
  return (
    <li style={{ listStyle: "none", margin: " 0 10px" }}>
      <Link href={to}>
        <Button
          as="a"
          size="lg"
          variant="ghost"
          color="white"
          fontSize={{ base: "lg", md: "2xl" }}
          width="100%"
          marginBottom={{ base: "0", md: "20px" }}
          borderRadius="15px"
          border="2px solid transparent"
          transition="all 0.3s ease"
          _hover={{ border: "2px solid #ebf8ff", cursor: "pointer" }}
        >
          {LinkText}
        </Button>
      </Link>
    </li>
  );
};

export default LinkLi;

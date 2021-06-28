import React from "react";
import { IconButton } from "@chakra-ui/react";

interface Props {
  to: string;
  icon: React.ReactElement;
}

const LinkIcon = ({ to, icon }: Props) => {
  return (
    <li style={{ listStyle: "none" }}>
      <IconButton
        aria-label=""
        as="a"
        href={to}
        borderRadius="15px"
        bgColor="inherit"
        marginTop={{ base: "0", md: "4vh" }}
        fontSize={{ base: "3xl", md: "5xl" }}
        transition="all 0.4s ease"
        border="1px solid transparent"
        _hover={{ border: "1px solid #ebf8ff" }}
        icon={icon}
      />
    </li>
  );
};

export default LinkIcon;

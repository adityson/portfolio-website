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
        transition="all 0.2s ease"
        _hover={{ transform: "scale(1.2)" }}
        icon={icon}
      />
    </li>
  );
};

export default LinkIcon;

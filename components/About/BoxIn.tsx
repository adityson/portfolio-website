import React from "react";
import { border, Box } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  hasPartition: boolean;
  childWidth: string;
}

const BoxIn = ({ children, childWidth, hasPartition }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      p={5}
      maxW={childWidth}
      borderLeft={hasPartition ? "1px solid #4299e1" : "none"}
      my={5}
      mx={4}
      bgColor="#ebf8ff"
      transition="all 0.2s ease"
    >
      {children}
    </Box>
  );
};

export default BoxIn;

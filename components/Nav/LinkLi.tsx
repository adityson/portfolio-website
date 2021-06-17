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
            size='md'
            variant="ghost"
            padding='8px'
            borderRadius='15px'
            transition='all 0.3s ease'
            _hover={{ bgColor: '#2C7A7B', cursor: 'pointer'}}
        >
          {LinkText}
        </Button>
      </Link>
    </li>
  );
};

export default LinkLi;

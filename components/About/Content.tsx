import BoxIn from "./BoxIn";
import { Text, Box } from "@chakra-ui/react";

export const ContentOne = () => {
  return (
    <>
      <BoxIn childWidth="1200px" hasPartition={true}>
        <Text fontSize={{ base: "md", md: "xl" }}>
          I'm a pre-final year undergrad student studying Computer Science and
          Engineering at NIT Silchar, India. I'm on the journey to explore the
          diverse field that Computer Science is. I love Web Development, trying
          out technologies, and building various features.
        </Text>
      </BoxIn>
    </>
  );
};

export const ContentTwo = () => {
  return (
    <BoxIn childWidth="800px" hasPartition={true}>
      <Text fontSize={{ base: "md", md: "xl" }}>
        Problem Solving using Data Structures and Algorithms fascinates me so I
        regularly keep up with that, and I'm enthusiastic to dive deep to learn
        more.
      </Text>
    </BoxIn>
  );
};

export const ContentThree = () => {
  return (
    <BoxIn childWidth="600px" hasPartition={true}>
      <Text fontSize={{ base: "md", md: "xl" }}>
        My interests include playing Tennis and Badminton, and learning Japanese
        (currently elementary level).
      </Text>
    </BoxIn>
  );
};

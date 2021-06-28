import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Intro from "../components/Intro/Intro";
import AboutAlt from "../components/About/AboutAlt";

export default function Home() {
  // const anc: string[] = ["#about", "#intro"];

  return (
    <>
      <Head>
        <title>Home|Portfolio</title>
      </Head>

      <Flex
        id="intro"
        height={{ base: "", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Intro />
        <AboutAlt />
      </Flex>
      {/* <ScrollAnchor jump={anc} />
      <About /> */}
    </>
  );
}

import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import InsiteLinks from "../components/Intro/InsiteLinks";
import ScrollAnchor from "../components/ScrollAnchor/ScrollAnchor";

export default function Home() {
  const anc: string[] = ["#about", "#intro"];

  return (
    <>
      <Head>
        <title>Home|Portfolio</title>
      </Head>

      <Flex
        id="intro"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Flex flexDirection="column">
          <Intro />
          <InsiteLinks />
        </Flex>
      </Flex>
      <ScrollAnchor jump={anc} />
      <About />
    </>
  );
}

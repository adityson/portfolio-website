import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "@fontsource/nunito";
import "@fontsource/poppins/500.css";
import "@fontsource/satisfy";
import "@fontsource/orbitron";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Nunito",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "Poppins",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;

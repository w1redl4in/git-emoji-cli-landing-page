import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/dangrek";
import "@fontsource/arimo";
import "@fontsource/karla";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

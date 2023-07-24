/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable camelcase */
import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

const colors = {
  brand: {
    primary: "#FAF5FF",
    primary2: "#A412E2",
    primary3: "#E7C1F5",
    grey: "#879099",
  },
};

const fonts = {
  germania: "'Germania One', 'sans-serif'",
};

export const theme = extendTheme({ colors, fonts });

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Send Stack</title>
        <link rel="shortcut icon" type="image/jpg" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Germania+One&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <main className="main-font" suppressHydrationWarning>
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;

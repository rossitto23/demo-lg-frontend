import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";
import { Session } from "next-auth";

const theme = extendTheme({
    colors: {
        brand: {
            100: "#e9ede9",
            200: "#dae2db",
            300: "#ccd6cd",
            400: "#becbc0",
            500: "#a2b4a4",
            600: "#869d88",
            700: "#78927b",
            800: "#6b856e",
            900: "#546957",
        },
    },
});

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<{session : Session}>) {
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                <Navbar />
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    );
}

import Head from "next/head";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Ceci est un page <br />
                        <Text as={"span"} color={"brand.400"}>
                            de test
                        </Text>
                    </Heading>
                    <Text color={"gray.500"}>
                        Cette mini web app a été réalisé par Nicolas Rossitto
                        afin de montrer ses compétences.
                    </Text>
                    {session && (
                        <Stack
                            direction={"column"}
                            spacing={3}
                            align={"center"}
                            alignSelf={"center"}
                            position={"relative"}
                        >
                            <Text>
                                Vous êtes connectés avec l'e-mail :{" "}
                                {session?.user?.email}
                            </Text>
                        </Stack>
                    )}
                </Stack>
            </Container>
        </>
    );
}

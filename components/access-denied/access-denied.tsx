import { Box, Button, Heading } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function AccessDenied() {
    return (
        <Box textAlign="center" mt={10}>
            <Heading as="h1" size="xl" mb={6}>
                Accès refusé
            </Heading>
            <Box>
                <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={600}
                    width={"5rem"}
                    height={"2rem"}
                    color={"white"}
                    bg={"brand.400"}
                    variant={"link"}
                    href={"/api/auth/signin"}
                    onClick={(e) => {
                        e.preventDefault();
                        signIn();
                    }}
                    _hover={{
                        bg: "brand.300"
                    }}
                >Sign in</Button>
            </Box>
        </Box>
    );
}

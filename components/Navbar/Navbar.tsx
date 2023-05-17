import { ReactNode } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { signIn, useSession, signOut } from "next-auth/react";

const Links = ["home", "about", "contact"];

const NavLink = ({ children }: { children: ReactNode }) => {
    return (
        <Link href={children?.toString() === "home" ? "/" : `/${children}`}>
            {children}
        </Link>
    );
};

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const { data: session, status } = useSession();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    {session && (
                        <IconButton
                            size={"md"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    )}
                    <HStack spacing={8} alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {session &&
                                Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={"flex-end"}
                            direction={"row"}
                            spacing={6}
                        >
                            {!session ? (
                                <Button
                                    as={"a"}
                                    fontSize={"sm"}
                                    fontWeight={600}
                                    color={"white"}
                                    bg={"brand.400"}
                                    _hover={{
                                        bg: "brand.300",
                                    }}
                                    href={"/api/auth/signin"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signIn();
                                    }}
                                >
                                    Sign In
                                </Button>
                            ) : (
                                <Button
                                    as={"a"}
                                    fontSize={"sm"}
                                    fontWeight={600}
                                    href={"/api/auth/signout"}
                                    _hover={{
                                        bg: "red.300",
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                >
                                    Log out
                                </Button>
                            )}
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>

                {session && isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

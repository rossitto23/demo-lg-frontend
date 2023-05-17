import AccessDenied from "@/components/access-denied/access-denied";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";


export default function ContactFormWithSocialButtons() {
    const { hasCopied, onCopy } = useClipboard("nicolas.rossitto23@gmail.com");

    const { data: session } = useSession();
    if (!session) {
        return (
            <AccessDenied />
        );
    }
    return (
        <Flex
            bg={useColorModeValue("white.100", "white.900")}
            align="center"
            justify="center"
            css={{
                backgroundAttachment: "fixed",
            }}
            id="contact"
        >
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}
            >
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: "4xl",
                                md: "5xl",
                            }}
                        >
                            Contact
                        </Heading>

                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: "column", md: "row" }}
                        >
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: "row", md: "column" }}
                            >
                                <Tooltip
                                    label={
                                        hasCopied
                                            ? "Email Copié!"
                                            : "Copier email"
                                    }
                                    closeOnClick={false}
                                    hasArrow
                                >
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: "brand.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Link href="https://github.com/rossitto23">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: "brand.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="https://www.linkedin.com/in/nicolas-rossitto-592269198/">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: "brand.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>

                            <Box
                                bg={useColorModeValue("white", "gray.700")}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue(
                                    "gray.700",
                                    "whiteAlpha.900"
                                )}
                                shadow="base"
                            >
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Nom</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement
                                                children={<BsPerson />}
                                            />
                                            <Input
                                                type="text"
                                                name="nom"
                                                placeholder="Votre nom"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Adresse email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement
                                                children={<MdOutlineEmail />}
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Votre adresse email"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Votre message"
                                            rows={6}
                                            resize="none"
                                        />
                                    </FormControl>

                                    <Button
                                        colorScheme="blue"
                                        bg="brand.400"
                                        color="white"
                                        _hover={{
                                            bg: "brand.500",
                                        }}
                                    >
                                        Envoi
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}

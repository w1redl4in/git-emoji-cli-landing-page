import { Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";

export function Demo() {
  return (
    <Flex
      bg="#1E1D2F"
      alignItems="center"
      justifyContent="space-around"
      minH="100vh"
      id="demo"
      flexDir="column"
    >
      <VStack color="white" textAlign="center">
        <Heading>
          Uma demonstração rápida <br /> e prática de como <br /> o
          git-emoji-cli te ajuda
        </Heading>
        <Text>
          Não se esqueça que você <br />
          consegue procurar o tipo de commit <br />
          digitando!
        </Text>
      </VStack>
      <Image
        maxW="40rem"
        w="100%"
        height="auto"
        boxShadow="inner"
        borderRadius="1rem"
        src="git-emoji-cli.gif"
        alt="gif utilizando a git-emoji-cli"
      />
    </Flex>
  );
}

import { Code, Flex, Heading, VStack } from "@chakra-ui/react";

export function Instructions() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      id="instructions"
      flexDir="column"
      alignSelf="center"
      minH="100vh"
      maxW="70%"
      w="100%"
      borderBottom="1px solid rgba(000,000,000, 0.1)"
    >
      <Heading textAlign="center" fontSize={["4xl", "4xl", "4xl", "6xl"]}>
        Ficou curioso? <br />
        Deu vontade de experimentar? <br />É super rápido!
      </Heading>
      <VStack spacing="1rem" textAlign="center">
        <VStack spacing="1.5rem">
          <Heading fontSize="2xl">
            Instalando globalmente <br /> na sua máquina!
          </Heading>

          <Code w="100%" borderRadius="0.2rem" p="1rem">
            $ npm i -g git-emoji-cli // Instala o pacote na sua máquina <br /> $
            gec // Executa o pacote
          </Code>
        </VStack>

        <VStack spacing="1.5rem">
          <Heading fontSize="2xl">Usando com NPX</Heading>

          <Code w="100%" borderRadius="0.2rem" p="1rem">
            $ npx git-emoji-cli // Executa sem instalar o pacote
          </Code>
        </VStack>
      </VStack>
    </Flex>
  );
}

import { Center, Code, Heading, Text, VStack } from "@chakra-ui/react";

export function Instructions() {
  return (
    <Center
      id="instructions"
      w="100%"
      margin="auto"
      h="50vh"
      alignItems="center"
      flexDir="column"
      borderBottom="1px solid black"
    >
      <VStack spacing="1rem">
        <VStack spacing="1rem">
          <Heading>Como usar</Heading>
          <Text>Instalação:</Text>
          <Code borderRadius="0.2rem" p="1rem">
            $ npm i -g git-emoji-cli <br /> $ gec
          </Code>
        </VStack>
      </VStack>
      <VStack spacing="1rem">
        <Text>Using with NPX</Text>
        <Code borderRadius="0.2rem" p="1rem">
          $ npx git-emoji-cli
        </Code>
      </VStack>
    </Center>
  );
}

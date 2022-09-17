import { Center, Flex, Heading, Image, VStack } from "@chakra-ui/react";

export function Demo() {
  return (
    <Center id="demo" h="100vh" borderBottom="1px solid black">
      <VStack>
        <Heading>Demo</Heading>
        <Image boxShadow="lg" borderRadius="1rem" src="git-emoji-cli.gif" />
      </VStack>
    </Center>
  );
}

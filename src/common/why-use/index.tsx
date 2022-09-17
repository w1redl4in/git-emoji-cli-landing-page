import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export function WhyUse() {
  return (
    <Center id="whyuse" h="50vh" borderBottom="1px solid black">
      <VStack>
        <Heading>Por que usar?</Heading>
        <Text>Padronização de commits</Text>
        <Text>Commits semânticos e claros</Text>
      </VStack>
    </Center>
  );
}

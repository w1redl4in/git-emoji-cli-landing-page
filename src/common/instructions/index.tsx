import {
  Code,
  Flex,
  Heading,
  Tag,
  Text,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { GradientText } from "../../components/GradientText";

export function Instructions() {
  const [clipboardValue, setClipboardValue] = useState("");
  const { onCopy, hasCopied } = useClipboard(clipboardValue);
  const toast = useToast();

  const handleClipboard = useCallback(
    async (value: string) => {
      setClipboardValue(value);
      onCopy();
    },
    [onCopy]
  );

  useEffect(() => {
    if (hasCopied) {
      toast.closeAll();
      toast({
        title: `${clipboardValue} foi copiado com sucesso!`,
        variant: "solid",
        colorScheme: "green",
      });
    }
  }, [clipboardValue, hasCopied, toast]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      id="instructions"
      flexDir="column"
      alignSelf="center"
      minH="100vh"
      w="100%"
      borderBottom="1px solid rgba(000,000,000, 0.1)"
    >
      <Heading textAlign="center" fontSize={["4xl", "4xl", "4xl", "6xl"]}>
        <GradientText
          animate
          animateDuration={1000}
          fromTo={["#1AA37A", "#9DFFB3"]}
          type="linear"
        >
          Ficou curioso? <br />
          Deu vontade de experimentar? <br />É super rápido!
        </GradientText>
      </Heading>
      <VStack spacing="5rem" textAlign="center">
        <VStack spacing="1.5rem">
          <Heading fontSize="2xl">
            Instalando globalmente <br /> na sua máquina!
          </Heading>

          <Code
            minW="100%"
            borderRadius="0.5rem"
            p="2.2rem 2rem"
            textAlign="left"
            colorScheme="gray"
            position="relative"
          >
            <Text>$ npm i -g git-emoji-cli</Text>
          </Code>
        </VStack>

        <VStack spacing="1.5rem">
          <Heading fontSize="2xl">
            Usando depois <br />
            da instalação
          </Heading>
          <Code
            minW="100%"
            borderRadius="0.2rem"
            p="2.2rem 2rem"
            textAlign="left"
            colorScheme="gray"
            position="relative"
          >
            <Text>$ gec</Text>
          </Code>
        </VStack>

        <VStack spacing="1.5rem">
          <Heading fontSize="2xl">Usando com NPX</Heading>
          <Code
            minW="100%"
            borderRadius="0.2rem"
            p="2.2rem 2rem"
            textAlign="left"
            colorScheme="gray"
            position="relative"
          >
            <Text>$ npx git-emoji-cli</Text>
          </Code>
        </VStack>
      </VStack>
    </Flex>
  );
}

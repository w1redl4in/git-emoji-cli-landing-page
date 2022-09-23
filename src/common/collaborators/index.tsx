import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Collaborators() {
  return (
    <Flex
      minH="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Heading fontSize="5xl">Colaboradores</Heading>

      <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
        <VStack>
          <Heading fontSize="5xl">Criador</Heading>
          <Image src="felipe.svg" alt="On Peeps de mim" />
          <Heading fontSize="3xl">Felipe Austríaco</Heading>
          <Text>Software Engineer @ Mercado Livre</Text>
        </VStack>

        <VStack>
          <Heading fontSize="5xl">Commiter</Heading>
          <Image src="vitao.svg" alt="On Peeps de mim" />
          <Heading fontSize="3xl"> Vitor Delfino</Heading>
          <Text>Software Engineer @ Loft</Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

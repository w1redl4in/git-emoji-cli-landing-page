import { Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { useMemo } from "react";

export function Collaborators() {
  const collaborators = useMemo(
    () => [
      {
        name: "Felipe Austríaco",
        type: "Criador",
        company: "Software Engineer @ Mercado Livre",
        peep: "felipe.svg",
        peepAlt: "Um peep que representa o Felipe",
        link: "https://felipeaustriaco.dev",
      },
      {
        name: "Vitor Delfino",
        type: "Commiter",
        company: "Software Engineer @ Loft",
        peep: "vitao.svg",
        peepAlt: "Um peep que representa o Vitor",
        link: "https://vitordelfino.dev",
      },
    ],
    []
  );

  return (
    <Flex
      minH="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Heading fontSize="5xl">Colaboradores</Heading>

      <Flex mb="5" w="100%" justifyContent="space-around" flexWrap="wrap">
        {collaborators.map((collaborator) => (
          <VStack key={collaborator.name}>
            <Image
              maxW="20rem"
              w="100%"
              h="auto"
              src={collaborator.peep}
              alt={collaborator.peepAlt}
            />
            <Heading fontSize="5xl">{collaborator.type}</Heading>
            <Heading fontSize="3xl">
              <Link
                textDecor="underline"
                href={collaborator.link}
                target="_blank"
              >
                {collaborator.name}
              </Link>
            </Heading>
            <Text>{collaborator.company}</Text>
          </VStack>
        ))}
      </Flex>
    </Flex>
  );
}

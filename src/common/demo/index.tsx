import { Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { GradientText } from "../../components/GradientText";

export function Demo() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      minH="100vh"
      id="demo"
      flexDir="column"
      borderBottom="1px solid rgba(000,000,000, 0.1)"
    >
      <VStack textAlign="center">
        <Heading fontSize={["4xl", "4xl", "4xl", "6xl"]}>
          Uma demonstração rápida <br /> e prática de como <br /> o
          <GradientText
            animate
            animateDuration={1000}
            fromTo={["#C15CFF", "#FF5454"]}
            type="linear"
          >
            &nbsp;git-emoji-cli&nbsp;
          </GradientText>
          te ajuda
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

import { Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { GradientText } from "../../components/GradientText";

export function Features() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      flexDir="column"
      id="features"
      alignSelf="center"
      minH="100vh"
      maxW="70%"
      w="100%"
      borderBottom="1px solid rgba(000,000,000, 0.1)"
    >
      <Heading textAlign="center" fontSize={["4xl", "4xl", "4xl", "6xl"]}>
        <GradientText
          animate
          animateDuration={1000}
          fromTo={["#FFC2C2", "#FFD7A8"]}
          type="linear"
        >
          Features ✨
        </GradientText>
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Possibilidade de adicionar escopo do commit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Lista com 20+ commits customizados
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Possibilidade de buscar commit digitando
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Notifica processos pós-commit como testes
        </ListItem>
      </List>
    </Flex>
  );
}

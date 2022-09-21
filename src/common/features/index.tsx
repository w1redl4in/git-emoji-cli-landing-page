import { Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export function Features() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      id="features"
      alignSelf="center"
      h="50vh"
      maxW="70%"
      w="100%"
      borderBottom="1px solid rgba(000,000,000, 0.1)"
    >
      <Heading textAlign="center" fontSize="7xl">
        Features
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

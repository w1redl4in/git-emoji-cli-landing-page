import { Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export function WhyUse() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      h="50vh"
      borderBottom="1px solid rgba(000,000,000, 0.1)"
    >
      <Heading textAlign="center" fontSize="5xl">
        Por que <br /> usar?
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
    </Flex>
  );
}

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

type NavbarMobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

function NavbarMobileDrawer({ isOpen, onClose }: NavbarMobileDrawerProps) {
  return (
    <Drawer placement="top" size="full" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent color="white" bg="transparent" backdropFilter="blur(30px)">
        <DrawerCloseButton color="white" />

        <DrawerHeader>Git Emoji CLI</DrawerHeader>
        <DrawerBody>
          <Flex
            h="100vh"
            alignItems="center"
            flexDir="column"
            justifyContent="center"
          >
            <VStack spacing="10">
              <Link
                target="_blank"
                href="https://github.com/w1redl4in/git-emoji-cli"
              >
                Github
              </Link>
              <Link
                target="_blank"
                href="https://github.com/w1redl4in/git-emoji-cli"
              >
                NPM
              </Link>
            </VStack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export function NavbarMobile() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex
      position="absolute"
      backdropFilter="blur(4px)"
      zIndex={99}
      top={0}
      width="100%"
      h="5rem"
      color="white"
    >
      <NavbarMobileDrawer isOpen={isOpen} onClose={onClose} />
      <Flex
        m="0 auto"
        width="60%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading>Git Emoji Cli</Heading>
        <Button colorScheme="blackAlpha" onClick={onOpen}>
          Open
        </Button>
      </Flex>
    </Flex>
  );
}

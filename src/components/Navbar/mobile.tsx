import { HamburgerIcon } from "@chakra-ui/icons";
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
import { useCallback, useMemo, useRef } from "react";
import { GradientText } from "../GradientText";

type NavbarMobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

function NavbarMobileDrawer({ isOpen, onClose }: NavbarMobileDrawerProps) {
  const finalRef = useRef(null);

  const links = useMemo(
    () => [
      {
        name: "demo.",
        url: "#demo",
      },
      {
        name: "features.",
        url: "#features",
      },
      {
        name: "instruções.",
        url: "#instructions",
      },
      {
        name: "contribuidores.",
        url: "#collaborators",
      },
      {
        name: "github.",
        url: "https://github.com/w1redl4in/git-emoji-cli",
      },
      {
        name: "npm.",
        url: "https://www.npmjs.com/package/git-emoji-cli",
      },
    ],
    []
  );

  const handleOnClickOnLink = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Drawer
      finalFocusRef={finalRef}
      placement="top"
      size="full"
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent color="white" bg="transparent" backdropFilter="blur(30px)">
        <DrawerCloseButton color="white" />

        <DrawerHeader>
          <GradientText
            animate
            animateDuration={1000}
            fromTo={["#C15CFF", "#FF5454"]}
            type="linear"
          >
            git-emoji-cli
          </GradientText>
        </DrawerHeader>
        <DrawerBody>
          <Flex
            h="100vh"
            alignItems="center"
            flexDir="column"
            justifyContent="center"
          >
            <VStack spacing="10">
              {links.map((link) => (
                <Link
                  onClick={handleOnClickOnLink}
                  key={link.name}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
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
        <Heading fontSize="2xl">
          <GradientText
            animate
            animateDuration={1000}
            fromTo={["#C15CFF", "#FF5454"]}
            type="linear"
          >
            git-emoji-cli
          </GradientText>
        </Heading>
        <Button colorScheme="blackAlpha" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Flex>
    </Flex>
  );
}

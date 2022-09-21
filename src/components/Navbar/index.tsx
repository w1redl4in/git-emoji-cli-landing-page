import { Flex, Heading, Link } from "@chakra-ui/react";

export function Navbar() {
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
      <Flex
        m="0 auto"
        width="60%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Link target="_blank" href="https://felipeaustriaco.dev">
          Quem desenvolveu?
        </Link>
        <Link target="_blank" href="https://github.com/w1redl4in/git-emoji-cli">
          Github
        </Link>
        <Link
          target="_blank"
          href="https://www.npmjs.com/package/git-emoji-cli"
        >
          NPM
        </Link>
        <Heading>Git Emoji Cli</Heading>
        <Link href="#demo">Demo</Link>
        <Link href="#whyuse">Porque usar</Link>
        <Link href="#instructions">Instruções</Link>
      </Flex>
    </Flex>
  );
}

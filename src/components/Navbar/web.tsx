import { Flex, Heading, Link } from "@chakra-ui/react";
import { GradientText } from "../GradientText";

export function NavbarWeb() {
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
        <Link href="#demo">demo.</Link>
        <Link href="#features">features.</Link>
        <Link href="#instructions">instruções.</Link>
        <Heading>
          <GradientText
            animate
            animateDuration={1000}
            fromTo={["#C15CFF", "#FF5454"]}
            type="linear"
          >
            git-emoji-cli
          </GradientText>
        </Heading>
        <Link href="#collaborators">colaboradores.</Link>
        <Link target="_blank" href="https://github.com/w1redl4in/git-emoji-cli">
          github.
        </Link>
        <Link
          target="_blank"
          href="https://www.npmjs.com/package/git-emoji-cli"
        >
          npm.
        </Link>
      </Flex>
    </Flex>
  );
}

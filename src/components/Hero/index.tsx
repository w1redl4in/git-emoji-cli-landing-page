import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { GradientText } from "../GradientText";
export function Hero() {
  const [index, setIndex] = useState(0);

  const emojis = useMemo(() => {
    return [
      "🧪",
      "✨",
      "♻️",
      "🙈",
      "✅",
      "🍻",
      "✏️",
      "📝",
      "🔄",
      "🚑",
      "💅",
      "🔧",
      "📸",
      "🐛",
      "🎨",
      "🔥",
      "🚀",
      "🤡",
      "🚚",
    ];
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => prevState + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= emojis.length) {
      setIndex(0);
    }
  }, [index, emojis.length]);

  return (
    <>
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="url('new-hero.jpg')"
        textAlign="center"
        minH="calc(100vh + 80px)"
        _before={{
          content: '" "',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backdropFilter: "blur(4px)",
          background:
            "linear-gradient(180deg,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.9) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)",
        }}
      >
        <Box position="absolute" top="35%">
          <VStack spacing="10">
            <Heading fontSize={["2xl", "2xl", "4xl", "6xl"]} color="white">
              Cansado de fazer commits despadronizados <br /> e sem graça?
            </Heading>
            <br />
            <Heading color="white" fontSize={["2xl", "2xl", "4xl", "6xl"]}>
              Conheça o
              <GradientText
                animate
                animateDuration={1000}
                fromTo={["#C15CFF", "#FF5454"]}
                type="linear"
              >
                &nbsp;git-emoji-cli!
              </GradientText>
            </Heading>
            <Heading fontSize="9xl">{emojis[index]}</Heading>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

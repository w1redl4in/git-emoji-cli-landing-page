import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
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
        h="100vh"
        _before={{
          content: '" "',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background:
            "linear-gradient(180deg,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.9) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)",
        }}
      >
        <Box position="absolute" top="calc(50% - 80px)">
          <VStack spacing="10">
            <Heading fontSize="4xl" color="white">
              Cansado de fazer commits despadronizados <br /> e sem graça?
            </Heading>
            <Heading color="white">Conheça o git-emoji-cli!</Heading>
            <Heading fontSize="9xl">{emojis[index]}</Heading>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

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
  }, [index]);

  return (
    <Box
      position="relative"
      _before={{
        content: '" "',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backdropFilter: "blur(5px)",
        background:
          "linear-gradient(180deg,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.8) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)",
      }}
    >
      <Flex
        maxW="60rem"
        maxH="30rem"
        h="100%"
        w="100%"
        zIndex={999}
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <VStack spacing="10">
          <Heading color="white">
            Cansado de fazer commits despadronizados <br /> e sem graça?
          </Heading>
          <Heading color="white">Conheça o git-emoji-cli!</Heading>
          <Heading fontSize="9xl">{emojis[index]}</Heading>
        </VStack>
      </Flex>
      <video autoPlay loop muted>
        <source src="pexels.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}

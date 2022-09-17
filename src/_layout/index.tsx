import { Flex } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <Flex position="relative" flexDir="column" minH="100vh">
      <Navbar />
      <Hero />
      {children}
    </Flex>
  );
}

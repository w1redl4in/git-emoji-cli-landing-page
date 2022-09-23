import { Flex } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { NavbarWeb, NavbarMobile } from "../components/Navbar";
import { useResponsive } from "../hooks/useResponsive";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  const { isTablet } = useResponsive();

  return (
    <Flex flexDir="column" minH="100vh">
      {isTablet ? <NavbarMobile /> : <NavbarWeb />}
      <Hero />
      {children}
    </Flex>
  );
}

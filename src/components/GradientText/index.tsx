import FancyText from "@carefully-coded/react-text-gradient";
type GradientTextProps = {
  children: React.ReactNode;
  fromTo: string[];
  type: "linear" | "radial";
  animate?: boolean;
  animateDuration?: number;
};
export function GradientText({
  children,
  fromTo,
  type,
  animate,
  animateDuration,
}: GradientTextProps) {
  const [from, to] = fromTo;

  return (
    <FancyText
      gradient={{ from, to, type }}
      animate={animate}
      animateDuration={animateDuration}
    >
      {children}
    </FancyText>
  );
}

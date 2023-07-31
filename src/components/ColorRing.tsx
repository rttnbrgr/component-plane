import { Box, Flex } from "@chakra-ui/react";

type ColorRingProps = {
  isActive: boolean;
  computedColor: string;
  handleClick: () => void;
  color: string;
};

export const ColorRing = ({
  isActive,
  computedColor,
  handleClick,
  color,
}: ColorRingProps) => {
  return (
    // Selected Ring
    <Flex
      // Resolve this transition
      bg={isActive ? "black" : "white"}
      boxSize="5"
      borderRadius="full"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        transition: "all .3s ease",
        "&:hover": {
          background: isActive ? "black" : "gray.400",
        },
      }}
    >
      {/* Color Ring */}
      <Box
        bg={computedColor}
        boxSize="4"
        borderRadius="full"
        border="2px solid white "
        onClick={handleClick}
        sx={{
          transition: "all .3s ease",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: `${color}.500`,
          },
        }}
      />
    </Flex>
  );
};

import { Box, Stack, Flex } from "@chakra-ui/react";
import { defaultThemeColors } from "../utils";

type ColorControlsProps = {
  previewColors: string[];
  setPreviewColors: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ColorControls = ({
  previewColors,
  setPreviewColors,
}: ColorControlsProps) => {
  return (
    <Stack direction={"row"}>
      {defaultThemeColors.map((color, i) => {
        const isActive = previewColors.includes(color);
        const computedColor = isActive ? `${color}.500` : `${color}.100`;

        const handleClick = () => {
          if (isActive) {
            const index = previewColors.indexOf(color);
            const newArray = [
              ...previewColors.slice(0, index),
              ...previewColors.slice(index + 1),
            ];
            console.log("index", index);
            console.log("newArray", newArray);
            setPreviewColors(newArray);
            return;
          } else {
            setPreviewColors(old => [...old, color]);
            return;
          }
        };

        console.log("hi");
        return (
          // Selected Ring
          <Flex
            key={i}
            // Resolve this transition
            // bg={"black"}
            bg={isActive ? "black" : "white"}
            // opacity={isActive ? "100%" : "0%"}
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
      })}
    </Stack>
  );
};

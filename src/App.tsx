import "./App.css";
import { ChakraProvider, Box, Stack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonColorCollection } from "./components/Button";

// Can we grab these from Chakra?
const defaultThemeColors = [
  // "alphas",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
];

const RootFrame = ({ children }) => (
  <Flex h="100vh" w="100vw" direction="column">
    {children}
  </Flex>
);

function App() {
  const [previewColors, setPreviewColors] = useState([defaultThemeColors[0]]);
  return (
    <>
      <ChakraProvider>
        <RootFrame>
          {/* HEADER */}
          <Box textAlign="center" pb="10">
            <Text>Component Plane</Text>
            <Text>Color</Text>
            <Stack direction={"row"}>
              {defaultThemeColors.map((color, i) => {
                const isActive = previewColors.includes(color);
                const computedColor = isActive
                  ? `${color}.500`
                  : `${color}.100`;
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
                  <Box
                    bg={computedColor}
                    boxSize="4"
                    borderRadius="full"
                    onClick={handleClick}
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                );
              })}
            </Stack>
          </Box>

          {/* COMPONENT PANE */}
          <Box bg="pink.100" flexGrow="1" sx={{ overflowY: "scroll" }}>
            {/* this should be a scrolling pane */}
            <Stack direction="row" spacing="8">
              {/* Buttons */}
              {previewColors.map((color, i) => (
                <ButtonColorCollection colorScheme={color} />
              ))}
            </Stack>
          </Box>
        </RootFrame>
      </ChakraProvider>
    </>
  );
}

export { App };

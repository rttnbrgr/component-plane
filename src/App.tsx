import "./App.css";
import { ChakraProvider, Box, Stack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonColorCollection } from "./components/Button";
import { ColorControls } from "./components/ColorControls";
import { defaultThemeColors } from "./utils";
import {
  PlaceholderComponent,
  mockComponents,
} from "./components/PlaceholderComponent";

function App() {
  const [previewColors, setPreviewColors] = useState([defaultThemeColors[0]]);
  const previewColorsHandlers = { previewColors, setPreviewColors };
  return (
    <>
      <ChakraProvider>
        {/* ROOT FRAME */}
        <Flex h="100vh" w="100vw" direction="column">
          {/*******************
           * HEADER
           *******************/}
          <Box
            textAlign="left"
            pb="10"
            // bg="green"
            px="4"
            py="4"
          >
            <Box mb="2">
              <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
                Component Plane
              </Text>
            </Box>
            {/* Controls */}
            <Stack>
              <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
                Color
              </Text>
              <ColorControls {...previewColorsHandlers} />
            </Stack>
          </Box>

          {/* COMPONENT PANE */}
          <Box
            // bg="pink.100"
            p="4"
            py="8"
            flexGrow="1"
            sx={{ overflowY: "scroll" }}
          >
            {/* this should be a scrolling pane */}
            <Stack direction="row" spacing="8" alignItems={"start"}>
              {/* Buttons */}
              {previewColors.map((color, i) => (
                <>
                  {/* All the rest */}
                  {mockComponents.map((group, i) => (
                    <PlaceholderComponent
                      title={group.id}
                      key={i}
                      color={color}
                    >
                      <Stack mt="2">
                        {group.components.map((cmp, j) => (
                          <PlaceholderComponent
                            title={cmp}
                            key={j}
                            color={color}
                          />
                        ))}
                      </Stack>
                    </PlaceholderComponent>
                  ))}
                  {/* Buttons */}
                  <ButtonColorCollection colorScheme={color} key={i} />
                </>
              ))}
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
}

export { App };

import "./App.css";
import { ChakraProvider, Box, Stack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonColorCollection } from "./components/Button";
import { ColorControls } from "./components/ColorControls";
import { defaultThemeColors } from "./utils";
import {
  PlaceholderComponent,
  componentStateObject,
  mockComponents,
} from "./components/PlaceholderComponent";
import { ComponentControls } from "./components/ComponentControls";

function App() {
  // Colors
  const [previewColors, setPreviewColors] = useState([defaultThemeColors[0]]);
  const previewColorsHandlers = { previewColors, setPreviewColors };

  // Components
  const [visibleComponents, setVisibleComponents] =
    useState(componentStateObject);
  const visibleComponentsHandlers = { visibleComponents, setVisibleComponents };

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
            <Stack mb="2">
              <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
                Color
              </Text>
              <ColorControls {...previewColorsHandlers} />
            </Stack>
            {/* Components */}
            <Stack>
              <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
                Components
              </Text>
              <ComponentControls {...visibleComponentsHandlers} />
            </Stack>
          </Box>

          {/* COMPONENT PANE */}
          <Box p="4" py="8" flexGrow="1" sx={{ overflowY: "scroll" }}>
            {/* this should be a scrolling pane */}
            <Stack direction="row" spacing="8" alignItems={"start"}>
              {/* Buttons */}
              {previewColors.map((color, j) => (
                <Stack direction="row" spacing="8" alignItems={"start"} key={j}>
                  {/* All the rest */}
                  {mockComponents.map((group, i) => (
                    <PlaceholderComponent
                      title={group.id}
                      key={i}
                      color={color}
                    >
                      <Stack mt="2">
                        {group.components.map((cmp, j) => {
                          const shouldRender = cmp !== "Button";
                          if (!shouldRender) {
                            return;
                          }
                          const isVisible: boolean = visibleComponents[cmp];
                          return (
                            isVisible && (
                              <PlaceholderComponent
                                title={cmp}
                                key={j}
                                color={color}
                              />
                            )
                          );
                        })}
                      </Stack>
                    </PlaceholderComponent>
                  ))}
                  {/* Buttons */}
                  {visibleComponents["Button"] && (
                    <ButtonColorCollection colorScheme={color} />
                  )}
                </Stack>
              ))}
            </Stack>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  );
}

export { App };

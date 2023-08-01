import "./App.css";
import { Box, Stack, Text, Flex, useColorMode, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonColorCollection } from "./components/Button";
import { ColorControls } from "./components/ColorControls";
import { PlaceholderComponent } from "./components/PlaceholderComponent";
import { ComponentControls } from "./components/ComponentControls";
import {
  mockComponents,
  componentGroupStateObject,
  componentStateObject,
  themeColors,
} from "./mocks";

function App() {
  // Colors
  const [visibleColors, setVisibleColors] = useState(themeColors);
  // Components
  const [visibleComponents, setVisibleComponents] =
    useState(componentStateObject);
  // Component Group
  const [visibleComponentGroups, setVisibleComponentGroups] = useState(
    componentGroupStateObject
  );

  const visibleComponentsHandlers = {
    visibleComponents,
    setVisibleComponents,
    visibleComponentGroups,
    setVisibleComponentGroups,
  };

  // Color Mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
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
          <Stack mb="2" alignItems={"flex-start"}>
            <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
              Color
            </Text>
            <ColorControls
              visibleColors={visibleColors}
              setVisibleColors={setVisibleColors}
            />
            <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
              Color Mode
            </Text>
            <Stack direction={"row"}>
              <Button onClick={toggleColorMode} size={"xs"}>
                Toggle
              </Button>
              <Text>{colorMode === "light" ? "🌝" : "🌚"}</Text>
            </Stack>
          </Stack>
          {/* Components */}
          <Stack>
            <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
              Components
            </Text>
            <ComponentControls {...visibleComponentsHandlers} />
          </Stack>
        </Box>

        {/* COMPONENT 
        
        
        PANE */}
        <Box p="4" py="8" flexGrow="1" sx={{ overflowY: "scroll" }}>
          {/* this should be a scrolling pane */}
          <Stack direction="row" spacing="8" alignItems={"start"}>
            {/* Colors */}
            {Object.keys(visibleColors).map((color, j) => {
              const shouldRender = visibleColors[color];
              if (!shouldRender) {
                return;
              }
              return (
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
              );
            })}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export { App };

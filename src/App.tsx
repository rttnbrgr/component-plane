import "./App.css";
import { ChakraProvider, Box, Stack, Button, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { ButtonColorCollection } from "./components/Button";

function App() {
  return (
    <>
      <ChakraProvider>
        <Box textAlign="center" pb="10">
          <Text>Component Plane</Text>
        </Box>
        {/* Buttons */}
        <Box>
          <ButtonColorCollection colorScheme={"gray"} />
        </Box>
      </ChakraProvider>
    </>
  );
}

export { App };

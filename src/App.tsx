import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider, Box, Stack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

const iconLeft = <ArrowBackIcon />;
const iconRight = <ArrowForwardIcon />;

const baseButtonProps = {
  colorScheme: "gray",
  size: "md",
  variant: "outline",
  children: "Button",
};

const loadingButtonProps = {
  isLoading: true,
  loadingText: "Loading",
};

type buttonCollectionProps = {
  colorScheme?: string;
  size?: string;
  variant?: string;
  children?: string;
};

const ButtonCollection = (props: buttonCollectionProps) => {
  console.log("props", props);
  return (
    <Stack direction="row" spacing={props.variant !== "link" ? 4 : 12}>
      <Button leftIcon={iconLeft} {...props} />
      <Button {...props} />
      <Button rightIcon={iconRight} {...props} />
      <Button {...props} {...loadingButtonProps} spinnerPlacement="start" />
      <Button {...props} isLoading />
      <Button {...props} {...loadingButtonProps} spinnerPlacement="end" />
    </Stack>
  );
};

ButtonCollection.defaultProps = baseButtonProps;

const ButtonSizeCollection = (
  props: Omit<buttonCollectionProps, "variant">
) => {
  return (
    <Stack direction="column">
      <ButtonCollection {...props} variant="solid" />
      <ButtonCollection {...props} variant="outline" />
      <ButtonCollection {...props} variant="ghost" />
      <Box pl="4">
        <ButtonCollection {...props} variant="link" />
      </Box>
    </Stack>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <div>hi</div>
        {/* Buttons */}
        <Box>
          <Stack direction="column" spacing="8">
            <ButtonSizeCollection size="xs" />
            <ButtonSizeCollection size="sm" />
            <ButtonSizeCollection size="md" />
            <ButtonSizeCollection size="lg" />
          </Stack>
        </Box>
      </ChakraProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export { App };

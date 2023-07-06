import "./App.css";
import { ChakraProvider, Box, Stack, Button, Text } from "@chakra-ui/react";
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
  return (
    <>
      <ChakraProvider>
        <Box textAlign="center" pb="10">
          <Text>Component Plane</Text>
        </Box>
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
    </>
  );
}

export { App };

import { Box, Stack, Button, ResponsiveValue } from "@chakra-ui/react";
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

type linkSpacing = {
  initial: ResponsiveValue<string>;
  siblingSpacingLink: ResponsiveValue<string>;
};

type buttonCollectionProps = linkSpacing & {
  colorScheme?: string;
  size?: string;
  variant?: string;
  children?: string;
};

const ButtonCollection = ({
  siblingSpacingLink,
  ...props
}: buttonCollectionProps) => {
  return (
    <Stack
      direction="row"
      spacing={props.variant !== "link" ? 4 : siblingSpacingLink}
    >
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
      <Box pl={props.initial}>
        <ButtonCollection {...props} variant="link" />
      </Box>
    </Stack>
  );
};

const propsBySize = [
  {
    size: "xs",
    initial: "2",
    siblingSpacingLink: "8",
  },
  {
    size: "sm",
    initial: "3",
    siblingSpacingLink: "10",
  },
  {
    size: "md",
    initial: "4",
    siblingSpacingLink: "12",
  },
  {
    size: "lg",
    initial: "6",
    siblingSpacingLink: "16",
  },
];

export const ButtonColorCollection = (
  props: Omit<
    buttonCollectionProps,
    "variant" | "size" | "initial" | "siblingSpacingLink"
  >
) => {
  return (
    <Stack direction="column" spacing="8">
      {propsBySize.map((sizeProps, i) => (
        <ButtonSizeCollection key={i} {...props} {...sizeProps} />
      ))}
    </Stack>
  );
};

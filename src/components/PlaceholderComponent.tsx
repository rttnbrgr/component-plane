import { Box, Text } from "@chakra-ui/react";

// Forms
export const formComponents = [
  "Button",
  "Checkbox",
  "Editable",
  "Form Control",
  "Icon Button",
  "Input",
  "Number Input",
  "Pin Input",
  "Radio",
  "Range Slider",
  "Select",
  "Slider",
  "Switch",
  "Text Area",
];

// Data
export const dataComponents = [
  "Badge",
  "Card",
  "Code",
  "Divider",
  "Kbd",
  "List",
  "Stat",
  "Table",
  "Tag",
];

export const mockComponents = [
  {
    id: "form",
    components: formComponents,
  },
  {
    id: "data",
    components: dataComponents,
  },
];

export type componentStateObjectType = any;

export const componentStateObject: componentStateObjectType = {
  Button: true,
  Checkbox: true,
  Editable: true,
  "Form Control": true,
  "Icon Button": true,
  Input: true,
  "Number Input": true,
  "Pin Input": true,
  Radio: true,
  "Range Slider": true,
  Select: true,
  Slider: true,
  Switch: true,
  "Text Area": true,
  Badge: true,
  Card: true,
  Code: true,
  Divider: true,
  Kbd: true,
  List: true,
  Stat: true,
  Table: true,
  Tag: true,
};

export const PlaceholderComponent = ({
  title,
  children,
  color = "red",
}: {
  title?: string;
  children?: any;
  color?: string;
}) => {
  return (
    <Box
      p={2}
      borderStyle={title ? "solid" : "dashed"}
      borderWidth={1}
      borderColor={`${color}.500`}
      borderRadius={"base"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"start"}
    >
      {title && (
        <Text
          fontSize="xl"
          letterSpacing="tight"
          color={`${color}.500`}
          width={"max-content"}
        >
          {title}
        </Text>
      )}
      {children && children}
    </Box>
  );
};

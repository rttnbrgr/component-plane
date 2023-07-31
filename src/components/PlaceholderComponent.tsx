import { Box, Text } from "@chakra-ui/react";

export const PlaceholderComponent = ({
  title,
  children,
  color = "red",
}: {
  title?: string;
  children?: React.ReactNode;
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

import {
  Box,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Switch,
  SimpleGrid,
  SwitchProps,
} from "@chakra-ui/react";
import { mockComponents } from "./PlaceholderComponent";

type ComponentControlSwitchProps = {
  id: any;
  children: string;
  isChecked?: SwitchProps["isChecked"];
  onChange?: SwitchProps["onChange"];
};

export const ComponentControlSwitch = ({
  id,
  children,
  isChecked = undefined,
  onChange,
}: ComponentControlSwitchProps) => {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      width={"100%"}
      justifyContent={"space-between"}
    >
      <FormLabel htmlFor={id} mb="0" mr="6" fontSize={"sm"}>
        {children}
      </FormLabel>
      <Switch id={id} isChecked={isChecked} onChange={onChange} />
    </FormControl>
  );
};

export const ComponentControls = ({
  visibleComponents,
  setVisibleComponents,
}) => {
  return (
    <Box>
      <Stack direction={"row"} spacing={"6"} width="100%" flexWrap={"wrap"}>
        {mockComponents.map((group, i) => (
          <Box
            maxWidth={{ base: "none", md: "500px" }}
            flex={{
              base: "0 0 100%",
              md: "1 0 50%",
            }}
          >
            <Text
              fontSize="sm"
              textTransform={"uppercase"}
              letterSpacing="wider"
              fontWeight={"bold"}
              color={`grey.500`}
            >
              {group.id}
            </Text>
            <SimpleGrid minChildWidth="150px" spacing="2" spacingX={"6"}>
              {group.components.map((cmp, j) => {
                const check = visibleComponents["Button"];
                const check2: boolean = visibleComponents[cmp];
                console.log("cmp: ", cmp);
                console.log("check: ", check);
                console.log("check2: ", check2);
                // const isChecked = visibleComponents[cmp]
                const handleToggle = () => {
                  console.log("handle toggle for ", cmp);
                  setVisibleComponents(prev => {
                    // Copy object
                    const duplicate = { ...prev };
                    // Update
                    duplicate[cmp] = !check2;
                    // Return
                    return duplicate;
                  });
                };
                return (
                  <ComponentControlSwitch
                    id="foo"
                    key={j}
                    isChecked={check2}
                    onChange={handleToggle}
                  >
                    {cmp}
                  </ComponentControlSwitch>
                );
              })}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

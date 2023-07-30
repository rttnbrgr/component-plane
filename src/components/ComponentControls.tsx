import { Box, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import {
  componentStateObjectType,
  mockComponents,
} from "./PlaceholderComponent";
import { ComponentControlSwitch } from "./ComponentControlSwitch";

type ComponentControlProps = {
  visibleComponents: componentStateObjectType;
  setVisibleComponents: React.Dispatch<
    React.SetStateAction<componentStateObjectType>
  >;
  visibleComponentGroups: componentStateObjectType;
  setVisibleComponentGroups: React.Dispatch<
    React.SetStateAction<componentStateObjectType>
  >;
};

export const ComponentControls = ({
  visibleComponents,
  setVisibleComponents,
  visibleComponentGroups,
  setVisibleComponentGroups,
}: ComponentControlProps) => {
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
            key={i}
          >
            <ComponentControlSwitch id={`${i}-${group.id}`} isHeader>
              {group.id}
            </ComponentControlSwitch>

            <SimpleGrid minChildWidth="150px" spacing="2" spacingX={"6"} mt="2">
              {group.components.map((cmp, j) => {
                const check = visibleComponents["Button"];
                const check2: boolean = visibleComponents[cmp];
                console.log("cmp: ", cmp);
                console.log("check: ", check);
                console.log("check2: ", check2);
                // const isChecked = visibleComponents[cmp]
                const handleToggle = () => {
                  console.log("handle toggle for ", cmp);
                  setVisibleComponents((prev: componentStateObjectType) => {
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

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
  function handleGroupToggle(x, y: boolean) {
    console.log("---");
    console.log("handle group toggle for ", x);
    console.log("val:", y);

    setVisibleComponents((prev: componentStateObjectType) => {
      // Copy object
      const duplicate = { ...prev };
      // Walk componets + set
      x.components.forEach(component => {
        // Update
        duplicate[component] = y;
        // duplicate[cmp] = !check2;
      });
      // Return
      return duplicate;
    });

    setVisibleComponentGroups(prev => {
      // Copy object
      const duplicate = { ...prev };

      // const check = duplicate[x.id];
      // console.log("duplicate", duplicate);
      // console.log("x", x);
      // console.log("x.id", x.id);

      // console.log("duplicate[form]", duplicate["form"]);
      // console.log("duplicate[x.id]", duplicate[x.id]);

      // console.log("check", check);

      // Look up group; Update val
      duplicate[x.id] = y;
      // Return
      return duplicate;
    });
  }

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
            <ComponentControlSwitch
              id={`${i}-${group.id}`}
              isHeader
              isChecked={visibleComponentGroups[group.id]}
              onChange={e => {
                handleGroupToggle(group, e.target.checked);
              }}
            >
              {group.id}
            </ComponentControlSwitch>

            {/* Components Rendered */}
            <SimpleGrid minChildWidth="150px" spacing="2" spacingX={"6"} mt="2">
              {group.components.map((cmp, j) => {
                // const check = visibleComponents["Button"];
                const check2: boolean = visibleComponents[cmp];
                // console.log("cmp: ", cmp);
                // console.log("check: ", check);
                // console.log("check2: ", check2);
                // const isChecked = visibleComponents[cmp]
                const handleToggle = () => {
                  // console.log("handle toggle for ", cmp);
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
                    id={`${j}-${cmp}`}
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

import { Stack } from "@chakra-ui/react";
import { themeColors, visibilityRecord } from "../mocks";
import { ColorRing } from "./ColorRing";

type ColorControlsProps = {
  visibleColors: visibilityRecord;
  setVisibleColors: React.Dispatch<React.SetStateAction<visibilityRecord>>;
};

export const ColorControls = ({
  visibleColors,
  setVisibleColors,
}: ColorControlsProps) => {
  const toggleColor = (color: string, isActive: boolean) => {
    console.log("handle toggle for ", color);
    setVisibleColors(prev => {
      // Copy object
      const duplicate = { ...prev };
      // Update
      duplicate[color] = !isActive;
      // Return
      return duplicate;
    });
  };

  return (
    <Stack direction={"row"}>
      {Object.keys(themeColors).map((color, i) => {
        const isActive = visibleColors[color];
        const computedColor = isActive ? `${color}.500` : `${color}.100`;

        return (
          <ColorRing
            key={`${i}-${color}`}
            isActive={isActive}
            computedColor={computedColor}
            handleClick={() => toggleColor(color, isActive)}
            color={color}
          />
        );
      })}
    </Stack>
  );
};

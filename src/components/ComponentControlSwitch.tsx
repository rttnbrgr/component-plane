import { FormControl, FormLabel, Switch, SwitchProps } from "@chakra-ui/react";

type ComponentControlSwitchProps = {
  id: string;
  children: string;
  isChecked?: SwitchProps["isChecked"];
  onChange?: SwitchProps["onChange"];
  isHeader?: boolean;
};

export const ComponentControlSwitch = ({
  id,
  children,
  isChecked = undefined,
  onChange,
  isHeader = false,
}: ComponentControlSwitchProps) => {
  const defaultStyles = {
    fontSize: "sm",
  };

  const headerStyles = {
    textTransform: "uppercase",
    letterSpacing: "wider",
    fontWeight: "bold",
    color: `grey.500`,
  };

  const styles = isHeader
    ? {
        ...headerStyles,
      }
    : {};

  return (
    <FormControl
      display="flex"
      alignItems="center"
      width={"100%"}
      justifyContent={"space-between"}
    >
      <FormLabel htmlFor={id} mb="0" mr="6" {...defaultStyles} {...styles}>
        {children}
      </FormLabel>
      <Switch id={id} isChecked={isChecked} onChange={onChange} />
    </FormControl>
  );
};

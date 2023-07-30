export type componentList = string[];

// Forms
export const formComponents: componentList = [
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
export const dataComponents: componentList = [
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

export type componentGroupObject = {
  id: string;
  components: componentList;
  visibility: boolean;
};

export const mockComponents: componentGroupObject[] = [
  {
    id: "form",
    components: formComponents,
    visibility: true,
  },
  {
    id: "data",
    components: dataComponents,
    visibility: true,
  },
];

export type visibilityRecord = Record<string, boolean>;

// should be comibed
export const componentGroupStateObject: visibilityRecord = {
  form: true,
  data: true,
};

// export type componentStateObjectType = any;

export const componentStateObject: visibilityRecord = {
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

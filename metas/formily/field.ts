import { Meta } from "../types/meta";
import { SPECIAL_TAG_MAP } from "../constants";

function upperFirstLetter(str: string) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
}

export default {
  matchTag: "SchemaField",
  tpl: `<SchemaField.$(type) $(name) $(x-decorator) $(x-component-props) />`,
  items: [
    {
      name: "Input",
      slots: [
        {
          name: "type",
          replacement: "",
          replacementFn: (_: string, replacement: string) => upperFirstLetter(replacement),
        },
        {
          name: "name",
          replacement: SPECIAL_TAG_MAP.random,
          replacementFn: (slotName: string, replacement: string) =>
            `${slotName}=${replacement}`,
        },
        {
          name: "x-component-props",
          replacement: {
            placeholder: "",
            maxLength: 20,
          },
          replacementFn: (slotName: string, replacement: string) =>
            `${slotName}={${replacement}}`,
        },
      ],
      optionalSlots: [],
    },
    {
      name: "DatePicker",
      slots: [
        {
          name: "type",
          replacement: "",
          replacementFn: (_: string, replacement: string) => upperFirstLetter(replacement),
        },
        {
          name: "enum",
          replacement: [],
          replacementFn: (slotName: string, replacement: string) =>
            `${slotName}={${replacement}}`,
        },
      ],
      optionalSlots: [
        {
          name: "x-component-props",
          replacement: {
            showTime: true,
          },
          replacementFn: (slotName: string, replacement: string) =>
            `${slotName}={${replacement}}`,
          picked: false,
        },
      ],
    },
  ],
  commonSlots: [
    {
      name: "x-decorator",
      replacement: "FormItem",
      replacementFn: (slotName: string, replacement: string) =>
        `${slotName}=${replacement}`,
    },
  ],
} as Meta;

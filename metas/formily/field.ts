import { Meta } from "../../types/meta";
import { SPECIAL_TAG_MAP } from "../../constants";

export default {
  matchTag: "SchemaField",
  tpl: `<SchemaField.$(type) $(x-decorator) $(x-component-props) />`,
  items: [
    {
      name: "Input",
      slots: [
        {
          name: "type",
          replacement: "String",
        },
        {
          name: "name",
          replacement: SPECIAL_TAG_MAP.random,
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}=${replacementStr}`,
        },
        {
          name: "x-component-props",
          replacement: {
            placeholder: "",
            maxLength: 20,
          },
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}={${replacementStr}}`,
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
          replacementFn: () => "String",
        },
        {
          name: "enum",
          replacement: [],
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}={${replacementStr}}`,
        },
      ],
      optionalSlots: [
        {
          name: "x-component-props",
          replacement: {
            showTime: true,
          },
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}={${replacementStr}}`,
          picked: false,
        },
      ],
    },
  ],
  commonSlots: [
    {
      name: "x-componnet",
      replacement: "",
      replacementFn: ({ item }) => item?.name,
    },
    {
      name: "x-decorator",
      replacement: "FormItem",
      replacementFn: ({ slotName, replacementStr }) =>
        `${slotName}=${replacementStr}`,
    },
  ],
} as Meta;

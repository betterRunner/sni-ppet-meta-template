import { Meta } from "../../types/meta";
import { SPECIAL_TAG_MAP } from "../../constants";

export default {
  matchTag: "formily_field",
  tpl: `<SchemaField.$(type) $(name) $(title) $(x-component) $(x-decorator) $(x-component-props) />`,
  items: [
    {
      name: "Input",
      slots: [
        {
          name: "type",
          replacement: "String",
          raw: true,
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
      name: "Select",
      tpl: `<SchemaField.$(type) $(name) $(title) $(x-component) $(x-decorator) $(x-component-props) $(enum) />`,
      slots: [
        {
          name: "type",
          replacement: "String",
          raw: true,
        },
        {
          name: "x-component-props",
          replacement: {},
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}={${replacementStr}}`,
        },
        {
          name: "enum",
          replacement: [],
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
          replacement: "String",
          raw: true,
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
      name: "name",
      replacement: SPECIAL_TAG_MAP.random,
      replacementFn: ({ slotName, replacementStr }) =>
        `${slotName}=${replacementStr}`,
    },
    {
      name: "title",
      replacementFn: ({ slotName, item }) => `${slotName}="${item?.name}"`,
    },
    {
      name: "x-component",
      replacement: "",
      replacementFn: ({ slotName, item }) => `${slotName}="${item?.name}"`,
    },
    {
      name: "x-decorator",
      replacement: "FormItem",
      replacementFn: ({ slotName, replacementStr }) =>
        `${slotName}=${replacementStr}`,
    },
  ],
} as Meta;

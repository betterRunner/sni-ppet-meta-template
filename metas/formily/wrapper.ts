import { Meta } from "../types/meta";

export default {
  matchTag: "SchemaField",
  tpl: `<SchemaField.$(type) $(name) $(x-decorator) $(x-component-props) />
</SchemaField>`,
  items: [
    {
      name: "FormLayout",
      slots: [
        {
          name: "x-component",
          replacementFn: ({ item }) => item?.name,
        },
        {
          name: "x-component-props",
          replacement: {
            labelCol: 5,
            wrapperCol: 27,
          },
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}={${replacementStr}}`,
        },
      ],
      optionalSlots: [],
    },
  ],
  commonSlots: [
    {
      name: "x-decorator",
      replacement: "FormItem",
      replacementFn: ({ slotName, replacementStr }) =>
        `${slotName}=${replacementStr}`,
    },
    {
      name: "type",
      replacement: "Void",
    },
  ],
} as Meta;

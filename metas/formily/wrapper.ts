import { Meta } from "../types/meta";

export default {
  matchTag: "SchemaField",
  tpl: `<SchemaField.$(type) $(name) $(title) />
</SchemaField>`,
  items: [
    {
      name: "FormLayout",
      slots: [
        {
          name: "x-component-props",
          replacement: {
            labelCol: 5,
            wrapperCol: 27,
          },
          replacementFn: (slotName: string, replacement: string) =>
            `${slotName}={{${replacement}}}`,
        },
      ],
      optionalSlots: [],
    },
  ],
  commonSlots: [
    {
      name: "x-decorator",
      replacement: "FormItem",
      replacementFn: (slotName: string, replacement: string) =>
        `${slotName}="${replacement}"`,
    },
    {
      name: "type",
      replacement: "void",
    },
  ],
} as Meta;

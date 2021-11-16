import { Meta } from "../../types/meta";

export default {
  matchTag: "formily_wrapper",
  tpl: `<SchemaField.$(type) $(x-component) $(x-component-props)>
</SchemaField.$(type)>`,
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
          replacementFn: ({ slotName, replacementStr }) =>
            `${slotName}={${replacementStr}}`,
        },
      ],
      optionalSlots: [],
    },
    {
      name: "FormGrid",
      slots: [
        {
          name: "x-component-props",
          replacement: {
            minColumns: 2,
            maxColumns: 2,
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
      name: "x-component",
      replacementFn: ({ slotName, item }) => `${slotName}="${item?.name}"`,
    },
    {
      name: "type",
      replacement: "Void",
      raw: true,
    },
  ],
} as Meta;

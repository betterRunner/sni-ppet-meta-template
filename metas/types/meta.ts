import { Patch } from './patch';

export interface Slot {
  name: string;
  replacement: any;
  replacementFn?: (context: { slotName?: string, replacementStr?: string, item?: MetaItem }) => string;
}

export interface OptionalSlot extends Slot {
  picked: boolean;
}

export interface MetaItem {
  name: string;
  slots: Slot[];
  optionalSlots?: OptionalSlot[];
  effects?: Patch[];
}

export interface Meta {
  matchTag: string;
  tpl: string;
  items: MetaItem[];
  commonSlots: Slot[];
  effects?: Patch[];
}

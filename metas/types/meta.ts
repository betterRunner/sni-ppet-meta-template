import { Patch } from './patch';

interface Slot {
  name: string;
  replacement: any;
  replacementFn?: (slotName: string, replacementStr: string) => string;
}

interface OptionalSlot extends Slot {
  picked: boolean;
}

interface MetaItem {
  name: string;
  slots: Slot[];
  optionalSlots?: OptionalSlot[];
}

export interface Meta {
  matchTag: string;
  tpl: string;
  items: MetaItem[];
  commonSlots: Slot[];
  effects?: Patch[];
}

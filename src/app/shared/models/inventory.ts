import {InventoryItem} from "./inventory-item";

export interface InventoryStateModel {
  weapons?: InventoryItem[];
  helmets?: InventoryItem[];
  chestplates?: InventoryItem[];
  cloaks?: InventoryItem[];
  boots?: InventoryItem[];
}

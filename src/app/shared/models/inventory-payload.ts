import {InventoryItem} from "./inventory-item";

export interface InventoryPayload {
  content: InventoryItem[];
  totalElements: number;
}

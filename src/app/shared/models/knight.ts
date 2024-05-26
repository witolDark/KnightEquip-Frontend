import {InventoryItem} from "./inventory-item";

export interface KnightStateModel {
  id?: number,
  baseHp?: number,
  baseDamage?: number,
  additionalDamage?: number,
  baseArmour?: number,
  elementalMastery?: number,
  energyRecharge?: number,
  critDamage?: number,
  critRate?: number,
  helmet: null | InventoryItem,
  cloak: null | InventoryItem,
  chestplate: null | InventoryItem,
  boots: null | InventoryItem,
  sword: null | InventoryItem
}

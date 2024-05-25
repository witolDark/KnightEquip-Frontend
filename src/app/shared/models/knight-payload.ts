import {InventoryItemPayload} from "./inventory-item-payload";

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
  helmet?: null | InventoryItemPayload,
  cloak?: null | InventoryItemPayload,
  chestplate?: null | InventoryItemPayload,
  boots?: null | InventoryItemPayload,
  sword?: null | InventoryItemPayload
}

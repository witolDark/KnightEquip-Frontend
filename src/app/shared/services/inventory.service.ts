import {Injectable} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {InventoryState} from "../store/inventory/inventory-state";
import {
  GenerateItem,
  GetBoots,
  GetChestplates,
  GetCloaks,
  GetHelmets,
  GetWeapons
} from "../store/inventory/inventory-actions";
import {InventoryItem} from "../models/inventory-item";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  @Select(InventoryState.inventory)
  public inventory$?: Observable<InventoryItem[]>;

  @Select(InventoryState.weapons)
  public weapons$?: Observable<InventoryItem[]>;

  @Select(InventoryState.helmets)
  public helmets$?: Observable<InventoryItem[]>;

  @Select(InventoryState.cloaks)
  public cloaks$?: Observable<InventoryItem[]>;

  @Select(InventoryState.chestplates)
  public chestplates$?: Observable<InventoryItem[]>;

  @Select(InventoryState.boots)
  public boots$?: Observable<InventoryItem[]>;

  constructor(private readonly store: Store) {
  }

  public generateItem() {
    this.store.dispatch(new GenerateItem());
  }

  public getInventory(page: number, size: number) {
    this.store.dispatch(new GetWeapons(page, size));
    this.store.dispatch(new GetHelmets(page, size));
    this.store.dispatch(new GetCloaks(page, size));
    this.store.dispatch(new GetChestplates(page, size));
    this.store.dispatch(new GetBoots(page, size));
  }
}

import {Injectable} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {InventoryState} from "../store/inventory/inventory-state";
import {GenerateItem, GetInventory} from "../store/inventory/inventory-actions";
import {InventoryStateModel} from "../models/inventory";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  @Select(InventoryState.inventory)
  public inventory$?: Observable<InventoryStateModel>;

  constructor(private readonly store: Store) {
  }

  public generateItem() {
    this.store.dispatch(new GenerateItem());
  }

  public getInventory(page: number, size: number) {
    this.store.dispatch(new GetInventory(page, size));
  }
}

import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Links} from "../../enums/links";
import {tap} from "rxjs";
import {InventoryStateModel} from "../../models/inventory";
import {GenerateItem, GetInventory} from "./inventory-actions";
import {InventoryItem} from "../../models/inventory-item";

@State<InventoryStateModel>({
  name: "inventory",
  defaults: {
    weapons: undefined,
    helmets: undefined,
    chestplates: undefined,
    cloaks: undefined,
    boots: undefined
  }
})
@Injectable()
export class InventoryState {
  @Selector()
  static inventory(state: InventoryStateModel) {
    return state;
  }

  @Selector()
  static weapons(state: InventoryStateModel) {
    return state.weapons;
  }

  @Selector()
  static helmets(state: InventoryStateModel) {
    return state.helmets;
  }

  @Selector()
  static chestplate(state: InventoryStateModel) {
    return state.chestplates;
  }

  @Selector()
  static cloaks(state: InventoryStateModel) {
    return state.cloaks;
  }

  @Selector()
  static boots(state: InventoryStateModel) {
    return state.boots;
  }

  constructor(private httpClents: HttpClient) {
  }

  @Action(GetInventory)
  getInventory({patchState}: StateContext<InventoryStateModel>, {page, size}: GetInventory) {
    return this.httpClents.get<InventoryItem[]>(Links.Inventory, {
      params: {
        page,
        size,
        sort: "level,DESC"
      }
    }).pipe(tap(payload => {
    }));
  }

  @Action(GenerateItem)
  generateItem({patchState}: StateContext<InventoryStateModel>) {
    return this.httpClents.post<InventoryItem>(Links.Inventory, {}).pipe(tap(payload => {
      console.log(payload);
    }));
  }
}

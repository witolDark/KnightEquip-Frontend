import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Links} from "../../enums/links";
import {catchError, EMPTY, tap} from "rxjs";
import {InventoryStateModel} from "../../models/inventory";
import {GenerateItem, GetBoots, GetChestplates, GetCloaks, GetHelmets, GetWeapons} from "./inventory-actions";
import {InventoryItem} from "../../models/inventory-item";
import {MessageService} from "primeng/api";
import {InventoryPayload} from "../../models/inventory-payload";

@State<InventoryStateModel>({
  name: "inventory",
  defaults: {
    weapons: [],
    helmets: [],
    chestplates: [],
    cloaks: [],
    boots: []
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
  static chestplates(state: InventoryStateModel) {
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

  constructor(private httpClents: HttpClient, private messageService: MessageService) {
  }

  @Action(GetWeapons)
  getWeapons({patchState}: StateContext<InventoryStateModel>, {page, size}: GetWeapons) {
    return this.httpClents.get<InventoryPayload>(Links.Inventory, {
      params: {
        page,
        size,
        sort: "level,DESC",
        type: 'SWORD'
      }
    }).pipe(tap(payload => {
      patchState({
        weapons: payload.content
      })
    }));
  }

  @Action(GetHelmets)
  getHelmets({patchState}: StateContext<InventoryStateModel>, {page, size}: GetHelmets) {
    return this.httpClents.get<InventoryPayload>(Links.Inventory, {
      params: {
        page,
        size,
        sort: "level,DESC",
        type: 'HELMET'
      }
    }).pipe(tap(payload => {
      patchState({
        helmets: payload.content
      })
    }));
  }

  @Action(GetCloaks)
  getCloaks({patchState}: StateContext<InventoryStateModel>, {page, size}: GetCloaks) {
    return this.httpClents.get<InventoryPayload>(Links.Inventory, {
      params: {
        page,
        size,
        sort: "level,DESC",
        type: 'CLOAK'
      }
    }).pipe(tap(payload => {
      patchState({
        cloaks: payload.content
      })
    }));
  }

  @Action(GetChestplates)
  getChestplates({patchState}: StateContext<InventoryStateModel>, {page, size}: GetChestplates) {
    return this.httpClents.get<InventoryPayload>(Links.Inventory, {
      params: {
        page,
        size,
        sort: "level,DESC",
        type: 'CHESTPLATE'
      }
    }).pipe(tap(payload => {
      patchState({
        chestplates: payload.content
      })
    }));
  }

  @Action(GetBoots)
  getBoots({patchState}: StateContext<InventoryStateModel>, {page, size}: GetBoots) {
    return this.httpClents.get<InventoryPayload>(Links.Inventory, {
      params: {
        page,
        size,
        sort: "level,DESC",
        type: 'BOOTS'
      }
    }).pipe(tap(payload => {
      patchState({
        boots: payload.content
      })
    }));
  }

  @Action(GenerateItem)
  generateItem(_context: StateContext<InventoryStateModel>) {
    return this.httpClents.post<InventoryItem>(Links.Inventory, {}).pipe(tap(payload => {
      return this.messageService.add({severity: 'success', summary: 'Успіх', detail: 'Новий предмет додано до інвентаря'})
    }), catchError((err: HttpErrorResponse) => {
      this.messageService.add({severity: 'danger', summary: 'Помилка', detail: err.error.message});
      return EMPTY;
    }));
  }
}

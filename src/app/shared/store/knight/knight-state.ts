import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Links} from "../../enums/links";
import {tap} from "rxjs";
import {EquipItem, GetKnight, UnequipItem} from "./knight-actions";
import {KnightStateModel} from "../../models/knight";

@State<KnightStateModel>({
  name: "knight",
  defaults: {
    id: 0,
    baseHp: 0,
    baseDamage: 0,
    additionalDamage: 0,
    baseArmour: 0,
    elementalMastery: 0,
    energyRecharge: 0,
    critDamage: 0,
    critRate: 0,
    helmet: null,
    cloak: null,
    chestplate: null,
    boots: null,
    sword: null
  }
})
@Injectable()
export class KnightState {
  @Selector()
  static knight(state: KnightStateModel) {
    return state;
  }

  constructor(private httpClents: HttpClient) {
  }

  @Action(GetKnight)
  getKnight({patchState}: StateContext<KnightStateModel>) {
    return this.httpClents.get<KnightStateModel>(Links.Knight).pipe(tap((payload: KnightStateModel) => {
      patchState({
        ...payload
      });
    }));
  }

  @Action(EquipItem)
  equipItem({patchState}: StateContext<KnightStateModel>, {itemId}: EquipItem) {
    return this.httpClents.patch<KnightStateModel>(Links.Knight, {}, {params: {itemId}}).pipe(tap((payload: KnightStateModel) => {
      patchState({
        ...payload
      })
    }));
  }

  @Action(UnequipItem)
  unequipItem({patchState}: StateContext<KnightStateModel>, {itemId}: UnequipItem) {
    return this.httpClents.patch<KnightStateModel>(`${Links.Knight}/unequip`, {}, {params: {itemId}}).pipe(tap((payload: KnightStateModel) => {
      patchState({
        ...payload
      })
    }));
  }
}

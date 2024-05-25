import {Action, Select, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Links} from "../../enums/links";
import {tap} from "rxjs";
import {GetKnight} from "./knight-actions";
import {KnightStateModel} from "../../models/knight-payload";

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

  constructor(private httpClents: HttpClient) {}

  @Action(GetKnight)
  getKnight({patchState}: StateContext<KnightStateModel>){
    return this.httpClents.get<KnightStateModel>(Links.Knight).pipe(tap((payload: KnightStateModel) => {
      patchState({
        ...payload
      });
    }));
  }
}

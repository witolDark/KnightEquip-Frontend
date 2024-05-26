import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {KnightStateModel} from "../models/knight";
import {KnightState} from "../store/knight/knight-state";
import {Select, Store} from "@ngxs/store";
import {EquipItem, GetKnight, UnequipItem} from "../store/knight/knight-actions";

@Injectable({
  providedIn: 'root'
})
export class KnightService {
  @Select(KnightState.knight)
  public knight$?: Observable<KnightStateModel>;

  constructor(private readonly store: Store) {
  }

  public getKnight() {
    this.store.dispatch(new GetKnight());
  }

  public equipItem(itemId: number) {
    this.store.dispatch(new EquipItem(itemId));
  }

  public unequipItem(itemId: number) {
    this.store.dispatch(new UnequipItem(itemId));
  }
}

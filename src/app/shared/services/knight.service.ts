import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {KnightStateModel} from "../models/knight-payload";
import {KnightState} from "../store/knight/knight-state";
import {Select, Store} from "@ngxs/store";
import {GetKnight} from "../store/knight/knight-actions";

@Injectable({
  providedIn: 'root'
})
export class KnightService {
  @Select(KnightState.knight)
  public knight$?: Observable<KnightStateModel>;

  constructor(private readonly store: Store) {}

  public getKnight() {
    this.store.dispatch(new GetKnight());
  }
}
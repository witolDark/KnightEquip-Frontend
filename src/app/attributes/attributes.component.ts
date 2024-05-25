import {Component, OnDestroy, OnInit} from '@angular/core';
import {attributes} from "../shared/models/attributes";
import {Subject, takeUntil} from "rxjs";
import {KnightService} from "../shared/services/knight.service";
import {KnightStateModel} from "../shared/models/knight-payload";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.scss'
})
export class AttributesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  protected knight?: KnightStateModel;

  constructor(private knightService: KnightService) {
  }

  ngOnInit() {
    this.knightService.knight$?.pipe(takeUntil(this.destroy$)).subscribe((knight: KnightStateModel) => {
      this.knight = knight;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected readonly attributes = attributes;


}

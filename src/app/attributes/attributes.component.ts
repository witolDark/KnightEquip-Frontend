import {Component, OnDestroy, OnInit} from '@angular/core';
import {attributes} from "../shared/models/attributes";
import {Subject, takeUntil} from "rxjs";
import {KnightService} from "../shared/services/knight.service";
import {KnightStateModel} from "../shared/models/knight";
import {InventoryService} from "../shared/services/inventory.service";
import {InventoryItem} from "../shared/models/inventory-item";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.scss'
})
export class AttributesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  protected knight?: KnightStateModel;
  protected isActiveWeapon = false;
  protected isActiveHelmet = false;
  protected isActiveCloak = false;
  protected isActiveChestplate = false;
  protected isActiveBoots = false;
  protected pickedItem?: InventoryItem;

  constructor(private knightService: KnightService, private inventoryService: InventoryService) {
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

  onItemToggle(type: string) {
    switch (type) {
      case 'weapon':
        if (this.knight?.sword) {
          this.isActiveWeapon = true;
          this.isActiveHelmet = false;
          this.isActiveCloak = false;
          this.isActiveChestplate = false;
          this.isActiveBoots = false;
          this.pickedItem = this.knight?.sword;
        }
        break;
      case 'helmet':
        if (this.knight?.helmet) {
          this.isActiveWeapon = false;
          this.isActiveHelmet = true;
          this.isActiveCloak = false;
          this.isActiveChestplate = false;
          this.isActiveBoots = false;
          this.pickedItem = this.knight?.helmet;
        }
        break;
      case 'cloak':
        if (this.knight?.cloak) {
          this.isActiveWeapon = false;
          this.isActiveHelmet = false;
          this.isActiveCloak = true;
          this.isActiveChestplate = false;
          this.isActiveBoots = false;
          this.pickedItem = this.knight?.cloak;
        }
        break;
      case 'chestplate':
        if (this.knight?.chestplate) {
          this.isActiveWeapon = false;
          this.isActiveHelmet = false;
          this.isActiveCloak = false;
          this.isActiveChestplate = true;
          this.isActiveBoots = false;
          this.pickedItem = this.knight?.chestplate;
        }
        break;
      case 'boots':
        if (this.knight?.boots) {
          this.isActiveWeapon = false;
          this.isActiveHelmet = false;
          this.isActiveCloak = false;
          this.isActiveChestplate = false;
          this.isActiveBoots = true;
          this.pickedItem = this.knight?.boots;
        }
        break;
    }
  }

  onGenerateItem() {
    this.inventoryService.generateItem();
  }

  onDeleteItem() {
    if (this.pickedItem?.id) {
      this.knightService.unequipItem(this.pickedItem?.id);
      this.isActiveWeapon = false;
      this.isActiveHelmet = false;
      this.isActiveCloak = false;
      this.isActiveChestplate = false;
      this.isActiveBoots = false;
      this.pickedItem = undefined;
    }
  }
}

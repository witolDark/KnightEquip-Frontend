import {Component, OnInit} from '@angular/core';
import {InventoryService} from "../shared/services/inventory.service";
import {InventoryItem} from "../shared/models/inventory-item";
import {KnightService} from "../shared/services/knight.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
  choosenItem: InventoryItem | undefined;
  choosenItemName: string | undefined;
  choosenItemMainStat: string | undefined;
  choosenImageSrc: string | undefined;

  constructor(protected inventoryService: InventoryService, private knightService: KnightService) {
  }

  ngOnInit() {
    this.inventoryService.getInventory(0, 10000);
  }

  onItemClick(item: InventoryItem) {
    this.choosenItem = item;
    if (item.type === 'SWORD') {
      this.choosenItemName = "Меч";
      this.choosenImageSrc = "assets/icons/sword.svg"
    }
    if (item.type === 'HELMET') {
      this.choosenItemName = "Шолом";
      this.choosenImageSrc = "assets/icons/helmet.svg"
    }
    if (item.type === 'CLOAK') {
      this.choosenItemName = "Плащ";
      this.choosenImageSrc = "assets/icons/cloak.svg"
    }
    if (item.type === 'CHESTPLATE') {
      this.choosenItemName = "Броня";
      this.choosenImageSrc = "assets/icons/chestplate.svg"
    }
    if (item.type === 'BOOTS') {
      this.choosenItemName = "Чоботи";
      this.choosenImageSrc = "assets/icons/boots.svg"
    }

    if (item.mainStat === 'ATTACK_PERCENT') this.choosenItemMainStat = "Сила атаки"
    if (item.mainStat === 'ENERGY_RECHARGE') this.choosenItemMainStat = "Відновлення енергії"
    if (item.mainStat === 'CRIT_DMG') this.choosenItemMainStat = "Крит. шкода"
    if (item.mainStat === 'CRIT_RATE') this.choosenItemMainStat = "Шанс крит. попадання"
    if (item.mainStat === 'ELEMENTAL_MASTERY') this.choosenItemMainStat = "Майстерність стихій"
  }

  onEquipItem() {
    if (this.choosenItem?.id) {
      this.knightService.equipItem(this.choosenItem.id);
    } else {
      console.log("Item doesn't exists")
    }
  }
}

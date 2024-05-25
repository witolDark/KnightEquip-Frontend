import {Component, OnInit} from '@angular/core';
import {InventoryService} from "../shared/services/inventory.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.inventoryService.getInventory(0, 10);
  }
}

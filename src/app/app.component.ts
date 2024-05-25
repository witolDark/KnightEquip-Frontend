import {Component, OnInit} from '@angular/core';
import {KnightService} from "./shared/services/knight.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'KnightEquip-frontend';

  constructor(private knightService: KnightService) {}

  ngOnInit() {
    this.knightService.getKnight();
  }
}

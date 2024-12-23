import { Component } from '@angular/core';
import {ActionStoreService} from "../../store/action-store.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;


  constructor(private actionStoreService: ActionStoreService) {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.actionStoreService.setIsBurgerMenuOpen(this.isMenuOpen);
  }
}

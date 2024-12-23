import {Component, OnInit} from '@angular/core';
import {ActionStoreService} from "../../store/action-store.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isMenuOpen = false;


  constructor(private actionStore: ActionStoreService) {
  }

  ngOnInit(): void {
    this.actionStore.getIsBurgerMenuOpen().subscribe(flag => this.isMenuOpen = flag);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.actionStore.setIsBurgerMenuOpen(this.isMenuOpen);
  }


}

import {Component, OnInit} from '@angular/core';
import {ActionStoreService} from "../../store/action-store.service";
import {DataStoreService} from "../../store/data-store.service";
import {take} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isAuthenticated = false;

  constructor(private actionStore: ActionStoreService, private dataStore: DataStoreService) {
  }

  ngOnInit(): void {
    this.actionStore.getIsBurgerMenuOpen().subscribe(flag => this.isMenuOpen = flag);
    this.dataStore.getProfile().pipe(take(1)).subscribe(data => {
      this.isAuthenticated = !!data;
    })
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.actionStore.setIsBurgerMenuOpen(this.isMenuOpen);
  }
}

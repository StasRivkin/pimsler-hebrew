import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "./store/data-store.service";
import {ActionStoreService} from "./store/action-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pimsler-hebrew';
  isMenuOpen = false;
  isAutoplay = false;

  constructor(private dataStore: DataStoreService, private actionStore: ActionStoreService) {
  }

  ngOnInit(): void {
    this.actionStore.getIsBurgerMenuOpen().subscribe(flag => this.isMenuOpen = flag);
    this.actionStore.getIsAutoplayModeOn().subscribe(flag => this.isAutoplay = flag);
  }

  onAutoplayChange(event: any): void {
    if (event.checked) {
      this.actionStore.setIsAutoplayModeOn(true);
      // this.actionStore.setIsBurgerMenuOpen(false);
    } else {
      this.actionStore.setIsAutoplayModeOn(false);
      // this.actionStore.setIsBurgerMenuOpen(false);
    }
  }

  closeMenu(){
    console.log("clicked")
    this.actionStore.setIsBurgerMenuOpen(false);
  }

}

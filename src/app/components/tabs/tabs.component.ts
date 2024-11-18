import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {

  constructor(
    private store: DataStoreService
  ) {
  }

  ngOnInit(): void {
  }

  onTabChange(event: any) {
    const selectedIndex = event.index;
    this.updateAudios(selectedIndex);
  }

  updateAudios(tabIndex: number) {
    switch (tabIndex) {
      case 0:
        this.store.setShowElement(tabIndex)
        break;
      case 1:
        this.store.setShowElement(tabIndex)
        break;
      case 2:
        this.store.setShowElement(tabIndex)
        break;
      default:
        this.store.setShowElement(0)
    }
  }
}

import {Component,  OnInit} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(
    private store: DataStoreService,
  ) {
  }

  ngOnInit(): void {
    this.store.setCurPart(1);
    // this.store.getCurPart().subscribe(data => {
    //   const tabHeaderList = document.querySelector('.mat-mdc-tab-list');
    //   if (tabHeaderList) {
    //     (tabHeaderList as HTMLElement).style.overflowX = 'auto';
    //     (tabHeaderList as HTMLElement).style.transform = 'unset';
    //   }
    // });
  }

  async onTabChange(event: any) {
    const selectedIndex = event.index;
    this.store.setCurPart(selectedIndex + 1);
    this.store.setCurAudio(null);
    this.store.setActionSlider("")
  }

}

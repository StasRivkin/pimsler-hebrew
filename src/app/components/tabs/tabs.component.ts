import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {MatTabGroup} from "@angular/material/tabs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

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
    this.store.getCurPart().subscribe(data => {
      // const tabHeaderList = document.querySelector('.mat-mdc-tab-list');
      // if (tabHeaderList) {
      //   (tabHeaderList as HTMLElement).style.overflowX = 'auto';
      //   (tabHeaderList as HTMLElement).style.transform = 'unset';
      //   tabHeaderList.classList.add('hide-scrollbar');
      // }
    });
  }

  async onTabChange(event: any) {
    console.log("onTabChange", event);
    const selectedIndex = event.index;
    this.store.setCurPart(selectedIndex + 1);
    this.store.setCurAudio(null);
    this.store.setActionSlider("")
  }

}

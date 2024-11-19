import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {AudioLoaderService} from "../../services/audio-loader.service";

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
  }

  async onTabChange(event: any) {
    const selectedIndex = event.index;
    this.store.setCurPart(selectedIndex + 1);
  }

}

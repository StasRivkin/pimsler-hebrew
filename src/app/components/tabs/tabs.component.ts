import {AfterViewInit, Component, OnInit, QueryList, ViewChild} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ViewChild('tabGroup', {static: false}) tabGroup!: MatTabGroup;
  curPart: number = 0;

  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private touchEndX: number = 0;
  private touchStartTime: number = 0;
  private swipeThreshold = 50;
  private timeThreshold = 50;
  private curAudio: any; //to disable swipe if exists

  showArrow: boolean = false;
  arrowPositionX: number = 0;
  arrowType: string = "";
  swipeDirection: string = "";

  constructor(
    private dataStore: DataStoreService,
  ) {
  }

  ngOnInit(): void {
    this.dataStore.setCurPart(1);
    this.dataStore.getCurPart().subscribe(data => {
      this.curPart = data;
    });
    this.dataStore.getCurAudio().subscribe(data => this.curAudio = data);
  }

  ngAfterViewInit(): void {
    this.tabGroup.selectedTabChange.subscribe((data) => {
      this.centerActiveTab();
    });
    this.tabGroup.selectedIndex = 0
  }

  async onTabChange(event: any) {
    const selectedIndex = event.index;
    this.dataStore.setCurPart(selectedIndex + 1);
    this.dataStore.setCurAudio(null);
    this.dataStore.setActionSlider("");
  }

  private centerActiveTab(): void {
    const tabHeaderElement = document.getElementsByClassName("mat-mdc-tab-label-container")[0] as HTMLElement;
    const activeTab = tabHeaderElement.querySelector('.mdc-tab--active') as HTMLElement;
    if (tabHeaderElement && activeTab) {
      const tabHeaderWidth = tabHeaderElement.offsetWidth;
      const activeTabWidth = activeTab.offsetWidth;
      const activeTabOffset = activeTab.offsetLeft;
      const scrollPosition = activeTabOffset - tabHeaderWidth / 2 + activeTabWidth / 2;
      tabHeaderElement.scrollTo({left: scrollPosition, behavior: 'smooth'});
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.touchStartTime = new Date().getTime();
    this.swipeDirection = '';
  }

  onTouchMove(event: TouchEvent): void {
    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - this.touchStartX);
    const deltaY = Math.abs(touch.clientY - this.touchStartY);

    // Проверяем, что движение по X значительно больше, чем по Y
    if (deltaY > deltaX) {
      this.showArrow = false;
      this.swipeDirection = '';
      return;
    }

    this.touchEndX = touch.clientX;
    this.showArrow = true;

    if (this.curAudio) {
      if (this.touchEndX > this.touchStartX) {
        this.swipeDirection = 'back_ios';
        this.arrowType = 'back_ios';
      } else {
        this.showArrow = false;
      }
    }

    if (this.swipeDirection === '') {
      this.swipeDirection = this.touchEndX > this.touchStartX ? 'back_ios' : 'forward_ios';
      this.arrowType = this.swipeDirection === 'back_ios' ? 'back_ios' : 'forward_ios';
    }

    this.arrowPositionX =
      this.swipeDirection === 'back_ios' ? 5 : window.innerWidth - 24;
  }

  onTouchEnd(): void {
    const touchEndTime = new Date().getTime();
    const timeDifference = touchEndTime - this.touchStartTime;
    const distanceX = this.touchEndX - this.touchStartX;
    if (Math.abs(distanceX) < this.swipeThreshold || timeDifference < this.timeThreshold || this.touchEndX === 0) {
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchEndX = 0;
      this.touchStartTime = 0;
      this.showArrow = false;
      return;
    }
    if (Math.abs(distanceX) < this.swipeThreshold) {
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchEndX = 0;
      this.touchStartTime = 0;
      this.showArrow = false;
      return;
    }
    if (this.curAudio) {
      const screenWidth = window.innerWidth;
      if (this.swipeDirection === 'back_ios' && this.touchStartX < screenWidth / 3) {
        this.dataStore.setCurAudio(null);
        this.showArrow = false;
        return;
      } else {
        this.showArrow = false;
        return;
      }
    } else {
      const currentIndex = this.tabGroup.selectedIndex ?? 0;
      if (distanceX < 0) {
        if (currentIndex < this.tabGroup._tabs.length - 1) {
          this.tabGroup.selectedIndex = currentIndex + 1;
        }
      } else {
        if (currentIndex > 0) {
          this.tabGroup.selectedIndex = currentIndex - 1;
        }
      }
    }
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchStartTime = 0;
    this.showArrow = false;
  }

}

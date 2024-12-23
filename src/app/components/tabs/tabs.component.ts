import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {MatTabGroup} from "@angular/material/tabs";
import {take} from "rxjs";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ViewChild('tabGroup', { static: false }) tabGroup!: MatTabGroup;

  previousX: number = 0;
  isScrolling: boolean = false;
  lastDirection: 'left' | 'right' | null = null;
  curPart: number = 0;

  constructor(
    private store: DataStoreService,
  ) {
  }

  ngOnInit(): void {
    this.store.setCurPart(1);
    this.store.getCurPart().subscribe(data => {
      this.curPart = data;
      console.log(data)
    });

  }
  ngAfterViewInit(): void {
    this.tabGroup.selectedTabChange.subscribe((data) => {
      this.centerActiveTab();
    });
  }

  async onTabChange(event: any) {
    const selectedIndex = event.index;
    this.store.setCurPart(selectedIndex + 1);
    this.store.setCurAudio(null);
    this.store.setActionSlider("");
  }

  private centerActiveTab(): void {
    const tabHeaderElement = document.getElementsByClassName("mat-mdc-tab-label-container")[0] as HTMLElement;
    const activeTab = tabHeaderElement.querySelector('.mdc-tab--active') as HTMLElement;
    if (tabHeaderElement && activeTab) {
      const tabHeaderWidth = tabHeaderElement.offsetWidth;
      const activeTabWidth = activeTab.offsetWidth;
      const activeTabOffset = activeTab.offsetLeft;
      const scrollPosition = activeTabOffset - tabHeaderWidth / 2 + activeTabWidth / 2;
      tabHeaderElement.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }

  onTouchMove(event: TouchEvent): void {
    const touch = event.touches[0];

    if (this.previousX === 0) {
      this.previousX = touch.clientX;
      return;
    }
    if (touch.clientX > this.previousX) {
      this.lastDirection = 'right';
    } else if (touch.clientX < this.previousX) {
      this.lastDirection = 'left';
    }
    if (!this.isScrolling) {
      this.isScrolling = true;
    }
    this.previousX = touch.clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.isScrolling) {
      this.store.getCurPart()
        .pipe(take(1)) // Берём только первое значение и автоматически завершаем подписку
        .subscribe(currentPart => {
          if (this.lastDirection === 'right') {
            console.log('Прокрутка назад завершена');
            // this.store.setCurPart(currentPart + 1);
            //this.tabGroup.selectedIndex = currentPart - 1
          } else if (this.lastDirection === 'left') {
            console.log('Прокрутка вперед завершена');
            // this.store.setCurPart(currentPart + 1);
            //this.tabGroup.selectedIndex = currentPart + 1
          }
        });

      // Сброс значений
      this.isScrolling = false;
      this.previousX = 0;
      this.lastDirection = null;
    }
  }

  onTouchCancel(event: TouchEvent): void {
    if (this.isScrolling) {
      console.log('Прокрутка была отменена');
      this.isScrolling = false;
      this.previousX = 0;
      this.lastDirection = null;
    }
  }



}

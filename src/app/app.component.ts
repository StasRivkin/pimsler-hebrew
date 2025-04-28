import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "./store/data-store.service";
import {ActionStoreService} from "./store/action-store.service";
import {ProfileDataService} from "./services/profileData/profile-data.service";
import {IProfile} from "./inteface/Interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pimsler-hebrew';
  isMenuOpen = false;
  isAutoplay = false;
  isAuthenticated = false;
  currentProfile: IProfile | null = null;
  statusServer: string = "";
  // private pollingInterval = 3000;

  constructor(private dataStore: DataStoreService, private actionStore: ActionStoreService, private profileDataService: ProfileDataService,) {
  }

  async ngOnInit(): Promise<void> {
    // await this.startDynamicPolling();
    this.actionStore.getIsBurgerMenuOpen().subscribe(flag => this.isMenuOpen = flag);
    this.actionStore.getIsAutoplayModeOn().subscribe(flag => this.isAutoplay = flag);
    this.dataStore.getProfile().subscribe(data => {
      this.isAuthenticated = !!data;
      this.currentProfile = data;
    })
  }

  // private startDynamicPolling(): void {
  //   const poll = async () => {
  //     try {
  //       const response = await this.profileDataService.pingService();
  //       if (response === 'PONG') {
  //         console.log('Server is responding');
  //         this.statusServer = '';
  //         this.pollingInterval = 40000;
  //       }
  //     } catch (error) {
  //       this.statusServer = 'Server is not responding';
  //       console.log('Server is not responding');
  //     }
  //
  //     // Рекурсивный вызов с задержкой
  //     setTimeout(poll, this.pollingInterval);
  //   };
  //
  //   // Запускаем первый запрос
  //   poll();
  // }

  onAutoplayChange(event: any): void {
    if (event.checked) {
      this.actionStore.setIsAutoplayModeOn(true);
    } else {
      this.actionStore.setIsAutoplayModeOn(false);
    }
  }

  closeMenu() {
    this.actionStore.setIsBurgerMenuOpen(false);
  }

  async handleLogOut(): Promise<void> {
    await this.profileDataService.removeProfileData(this.currentProfile?.token!);
    this.closeMenu();
  }
}

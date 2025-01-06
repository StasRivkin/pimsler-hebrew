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
  currentProfile: IProfile|null = null;

  constructor(private dataStore: DataStoreService, private actionStore: ActionStoreService, private profileDataService: ProfileDataService,) {
  }

  ngOnInit(): void {
    this.actionStore.getIsBurgerMenuOpen().subscribe(flag => this.isMenuOpen = flag);
    this.actionStore.getIsAutoplayModeOn().subscribe(flag => this.isAutoplay = flag);
    this.dataStore.getProfile().subscribe(data => {
      this.isAuthenticated = !!data;
      this.currentProfile = data;
    })
  }

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

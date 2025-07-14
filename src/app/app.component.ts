import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "./store/data-store.service";
import {ActionStoreService} from "./store/action-store.service";
import {ProfileDataService} from "./services/profileData/profile-data.service";
import {IProfile} from "./inteface/Interfaces";
import {ActivatedRoute, Router} from "@angular/router";

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
  isChangePasswordModalOpen = false;

  // private pollingInterval = 3000;

  constructor(
    private dataStore: DataStoreService,
    private actionStore: ActionStoreService,
    private profileDataService: ProfileDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const token = params['token'];
      if (token) {
        await this.profileDataService.getProfile(token);
      }
    });
    this.actionStore.getIsBurgerMenuOpen().subscribe(flag => this.isMenuOpen = flag);
    this.actionStore.getIsAutoplayModeOn().subscribe(flag => this.isAutoplay = flag);
    this.dataStore.getProfile().subscribe(data => {
      this.isAuthenticated = !!data;
      this.currentProfile = data;
      if(data?.passwordRequired){
        this.actionStore.setIsChangePasswordModalOpen(true);
      }
    })
    this.actionStore.getIsChangePasswordModalOpen().subscribe(flag => this.isChangePasswordModalOpen = flag)
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

  handlePasswordChange() {
    this.actionStore.setIsBurgerMenuOpen(false);
    this.actionStore.setIsChangePasswordModalOpen(true);
  }
}

import {Component} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {ActionStoreService} from "../../store/action-store.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent {

  constructor(
    private dataStore: DataStoreService,
    private actionStore: ActionStoreService,
  ) {
  }

  onClose() {
    this.actionStore.setIsUserSettingOpen(false);
  }
}

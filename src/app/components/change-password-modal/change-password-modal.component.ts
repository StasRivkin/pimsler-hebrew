import {Component, OnInit} from '@angular/core';
import {ActionStoreService} from "../../store/action-store.service";
import {ProfileDataService} from "../../services/profileData/profile-data.service";
import {DataStoreService} from "../../store/data-store.service";

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrl: './change-password-modal.component.css'
})
export class ChangePasswordModalComponent implements OnInit {
  token: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(
    private actionStore: ActionStoreService,
    private dataStore: DataStoreService,
    private profileDataService: ProfileDataService,
  ) {
  }

  ngOnInit(): void {
    this.dataStore.getProfile().subscribe(data => this.token = data!.token)
  }

  async onSave() {
    if (this.newPassword.length < 8) {
      this.errorMessage = 'Пароль должен быть не корче 8 симовлов!';
    } else if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Пароли не совпадают!';
    } else {
      try {
        const error = await this.profileDataService.changePassword(this.newPassword, this.token);
        if (error === "") {
          this.actionStore.setIsChangePasswordModalOpen(false)
        } else {
          this.errorMessage = error;
        }

      } catch (error) {
        console.log("ERROR: " + error)
      }
    }
  }

  onCancel() {
    this.actionStore.setIsChangePasswordModalOpen(false)
  }


}

import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {window} from "rxjs";
import {DataStoreService} from "./store/data-store.service";
import {UpdateService} from "./services/updateService/update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pimsler-hebrew';

  constructor(private store: DataStoreService, private updateService: UpdateService) {
  }

  ngOnInit(): void {
    this.checkForUpdates();
  }

  checkForUpdates() {
    this.updateService['updates'].checkForUpdate().then(() => {
      console.log('Проверка обновлений завершена');
    }).catch(err => {
      console.error('Ошибка проверки обновлений:', err);
    });
  }

}

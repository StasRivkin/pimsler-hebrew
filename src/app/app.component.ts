import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {AudioLoaderService} from "./services/audio-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pimsler-hebrew';

  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(event => {
        if (event.type === 'VERSION_READY') {
          if (confirm('A new version of the app is available. Would you like to load the new version?')) {
            window.location.reload();
          }
        }
      });
    }
  }
}

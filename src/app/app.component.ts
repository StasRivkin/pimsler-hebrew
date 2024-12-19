import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

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
            this.clearCache().then(() => {
              window.location.reload();
            });
          }
        }
      });
      this.checkForUpdates();
    }
  }

  checkForUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Update check complete');
      }).catch(err => {
        console.log('Update check failed:', err);
      });
    }
  }

  async clearCache() {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      for (const cacheName of cacheNames) {
        await caches.delete(cacheName);
      }
      console.log('Cache cleared');
    }
  }
}

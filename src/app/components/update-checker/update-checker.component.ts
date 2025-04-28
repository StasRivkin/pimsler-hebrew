import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-checker',
  template: '',
})
export class UpdateCheckerComponent implements OnInit {
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe(async (event) => {
        console.log('Service Worker Update Event:', event);
        if (event.type === 'VERSION_DETECTED') {
          this.promptUserToUpdate();
        }
      });

      // Регулярная проверка обновлений
      setInterval(() => {
        this.checkForUpdates();
      }, 1000 * 60 * 5); // Каждые 5 минут
    } else {
      console.log('Service Worker not enabled.');
    }
  }

  private checkForUpdates() {
    this.updates.checkForUpdate().then(() => {
      console.log('Checked for updates');
    }).catch((error) => {
      console.error('Error checking for updates:', error);
    });
  }

  private promptUserToUpdate(): void {
    const snackBarRef = this.snackBar.open(
      'Доступна новая версия приложения. Обновить?',
      'Обновить',
      { duration: undefined }
    );
    snackBarRef.onAction().subscribe(() => {
      this.activateUpdate();
    });
  }

  private async activateUpdate(): Promise<void> {
    try {
      console.log('Activating update...');
      await this.clearCache();
      console.log('Cache cleared successfully.');
      await this.updates.activateUpdate();
      console.log('Update activated.');
      if (this.updates.isEnabled) {
        console.log('Reloading page...');
        document.location.reload();
      }
    } catch (error) {
      console.error('Error during update activation:', error);
    }
  }

  private async clearCache(): Promise<void> {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        for (const cacheName of cacheNames) {
          await caches.delete(cacheName);
          console.log(`Cache "${cacheName}" deleted.`);
        }
      } catch (error) {
        console.error('Error clearing cache:', error);
      }
    } else {
      console.log('Cache API is not supported by this browser.');
    }
  }
}

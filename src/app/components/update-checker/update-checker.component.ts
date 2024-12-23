import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-checker',
  template: '',
})
export class UpdateCheckerComponent implements OnInit {
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe((event) => {
        console.log('Service Worker Update Event:', event);
        if (event.type === 'VERSION_READY') {
          this.promptUserToUpdate();
        }
      });
    } else {
      console.log('Service Worker not enabled.');
    }
  }

  private promptUserToUpdate(): void {
    const snackBarRef = this.snackBar.open(
      'Доступна новая версия приложения. Обновить?',
      'Обновить',
      { duration: 6000 }
    );

    snackBarRef.onAction().subscribe(() => {
      this.activateUpdate();
    });
  }

  private async activateUpdate(): Promise<void> {
    await this.clearCache();
    this.updates.activateUpdate().then(() => {
      console.log('Update activated. Reloading the page...');
      document.location.reload();
    }).catch((error) => {
      console.error('Failed to activate update:', error);
    });
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

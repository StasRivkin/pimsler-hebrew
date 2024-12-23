import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {
    console.log(updates)
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe((event) => {
        if (event.type === 'VERSION_READY') {
          this.showUpdateNotification();
        }
      });
    }
  }

  private showUpdateNotification(): void {
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
    await this.clearCache(); // Очистка кэша перед обновлением
    this.updates.activateUpdate().then(() => {
      document.location.reload();
    });
  }

  async clearCache(): Promise<void> {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      for (const cacheName of cacheNames) {
        await caches.delete(cacheName);
      }
      console.log('Cache cleared');
    } else {
      console.log('Cache API не поддерживается этим браузером.');
    }
  }
}

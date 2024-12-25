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
      // Проверяем обновления сразу при загрузке
      this.updates.versionUpdates.subscribe(async (event) => {
        console.log('Service Worker Update Event:', event);
        if (event.type === 'VERSION_DETECTED') {
          // Если обнаружена новая версия, показываем уведомление
          this.promptUserToUpdate();
        } else {
          console.log('No updates');
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
      { duration: undefined } // Уведомление будет висеть до выбора действия
    );

    snackBarRef.onAction().subscribe(() => {
      this.activateUpdate();
    });
  }

  private async activateUpdate(): Promise<void> {
    try {
      console.log('Activating update...');
      await this.clearCache(); // Сбрасываем кеш
      console.log('Cache cleared successfully.');
      await this.updates.activateUpdate(); // Активируем обновление
      console.log('Update activated.');

      // Убедимся, что обновление было активировано
      if (this.updates.isEnabled) {
        console.log('Reloading page...');
        document.location.reload(); // Перезагружаем страницу
      }
    } catch (error) {
      console.error('Error during update activation:', error);
    }
  }

  private async clearCache(): Promise<void> {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys(); // Получаем все имена кешей
        for (const cacheName of cacheNames) {
          await caches.delete(cacheName); // Удаляем каждый кеш
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

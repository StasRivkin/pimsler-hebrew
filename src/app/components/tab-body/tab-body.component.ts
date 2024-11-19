import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {AudioLoaderService} from "../../services/audio-loader.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {
  private audios1: any[] = [];
  private audios2: any[] = [];
  private audios3: any[] = [];
  private curTab: number = 0;

  audios: any[] = [];
  paginatedAudios: any[] = [];
  currentPage = 0;
  pageSize = 6;

  currentAudio: HTMLAudioElement | undefined;
  isPlaying = false;

  constructor(private store: DataStoreService, private audioLoaderService: AudioLoaderService) {
  }

  async ngOnInit(): Promise<void> {
    this.store.getCurPart().subscribe(async curPart => {
      this.curTab = curPart;
      await this.onTabChange(curPart);
    });
  }

  onPlay(audioPlayer: HTMLAudioElement): void {
    this.stopAllAudios(audioPlayer);
    audioPlayer.play();
  }

  onPause(currentAudio: HTMLAudioElement): void {
    if (currentAudio) {
      currentAudio.pause();
      this.isPlaying = false;
    }
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedAudios();
  }

  private updatePaginatedAudios(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedAudios = this.audios.slice(startIndex, endIndex);
  }

  private stopAllAudios(currentAudio: HTMLAudioElement): void {
    const allAudioPlayers = document.querySelectorAll('audio');
    allAudioPlayers.forEach((audio: HTMLAudioElement) => {
      if (audio !== currentAudio) {
        audio.pause();
      }
    });
  }

  private async onTabChange(tabIndex: number): Promise<void> {
    if (this.isAudiosLoaded(tabIndex)) {
      return;
    }
    try {
      const audios = await this.audioLoaderService.preloadAudioFiles(tabIndex);
      const sortedAudios = this.sortAudio(audios);
      this.updateAudios(tabIndex, sortedAudios);
    } catch (error) {
      console.error('Ошибка при загрузке аудиофайлов:', error);
    }
  }

  private isAudiosLoaded(tabIndex: number): boolean {
    switch (tabIndex) {
      case 1:
        return this.audios1.length > 0;
      case 2:
        return this.audios2.length > 0;
      case 3:
        return this.audios3.length > 0;
      default:
        return false;
    }
  }

  private updateAudios(tabIndex: number, audios: any[]): void {
    switch (tabIndex) {
      case 1:
        this.audios1 = this.sortAudio(audios);
        break;
      case 2:
        this.audios2 = this.sortAudio(audios);
        break;
      case 3:
        this.audios3 = this.sortAudio(audios);
        break;
    }
    if (tabIndex === this.curTab) {
      this.audios = this.sortAudio(audios);
      this.updatePaginatedAudios();
    }
  }

  private sortAudio(data: any[]): any[] {
    data.sort((a, b) => {
      const numA = parseInt(a.title.replace(/[^\d]/g, ''), 10); // Извлекаем число из строки (например, "Урок 2" -> 2)
      const numB = parseInt(b.title.replace(/[^\d]/g, ''), 10); // То же для второго объекта
      return numA - numB;
    });
    return data;
  }
}
